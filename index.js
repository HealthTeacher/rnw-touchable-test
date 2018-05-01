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
const TILES = new Array(20).fill('');

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ccc',
    paddingVertical: 16,
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
    backgroundColor: 'red',
  },
  text: {
    fontWeight: 'bold',
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

  _handlePress() {
    this.setState({ pressed: true });
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
  render() {
    return (
      <View style={styles.box}>
        <ScrollView style={styles.scrollView}>
          {ROWS.map((el, i) => (
            <ScrollView horizontal={true} key={i} style={styles.scrollView}>
              {TILES.map((el, i) => (
                <Tile index={i} key={i} style={[i === 0 && styles.first]} />
              ))}
            </ScrollView>
          ))}
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
