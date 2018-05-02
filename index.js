import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const ROWS = new Array(40).fill('');

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ccc',
    paddingTop: 16,
  },
  scrollView: {
    flex: 1,
  },
  tile: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 16,
    marginRight: 16,
    minWidth: 280,
    paddingHorizontal: 16,
    paddingVertical: 64,
  },
  first: {
    marginLeft: 16,
  },
  pressed: {
    backgroundColor: 'orange',
  },
  text: {
    fontWeight: 'bold',
  },
  counter: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    bottom: 0,
    left: 0,
    padding: 8,
    position: 'sticky',
    right: 0,
  },
  toggleCounter: {
    backgroundColor: 'red',
  },
});

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };

    this._handlePress = this._handlePress.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.pressed !== nextState.pressed) {
      console.log('> Tile.shouldComponentUpdate', nextProps, nextState);
      return true;
    }
    return false;
  }

  _handlePress() {
    this.setState({ pressed: true });
    this.props.onPress();
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._handlePress}
        style={[
          styles.tile,
          this.state.pressed && styles.pressed,
          this.props.style,
        ]}
      >
        <Text style={styles.text}>Tile {this.props.index}</Text>
      </TouchableHighlight>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tilesPressed: 0,
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState(prevState => ({ tilesPressed: prevState.tilesPressed + 1 }));
    console.log('>>>> PRESS <<<<');
  }

  render() {
    return (
      <View style={styles.box}>
        <ScrollView style={styles.scrollView}>
          {ROWS.map((el, i) => (
            <Tile
              index={i}
              key={i}
              onPress={this.handlePress}
              style={styles.first}
            />
          ))}
        </ScrollView>
        <View
          style={[
            styles.counter,
            this.state.tilesPressed % 2 && styles.toggleCounter,
          ]}
        >
          <Text style={styles.text}>
            Tiles Pressed: {this.state.tilesPressed}
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
