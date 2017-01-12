import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class letsdothis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textTodo: '(write to-do here)',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What are your priorities for today?
        </Text>
        <TextInput
          style={styles.inputTodo}
          onChangeText={textTodo => this.setState({ textTodo })}
          value={this.state.textTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputTodo: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('letsdothis', () => letsdothis);
