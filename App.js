import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Camera from './Camera';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>Welcome to snaphole</Text>
        <Text>Shake your phone to open the developer menu. Test</Text>
        <Camera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
