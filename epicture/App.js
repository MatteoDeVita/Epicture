//App.js 

import React from 'react';
import Log from './Components/Log.jsx'
import { StyleSheet, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.globalView}>
          <Log/>
        </View>
    );
  }
}


const styles = StyleSheet.create ({
    globalView: {
      backgroundColor: 'rgba(244, 161, 32, 0.95)',
      height: '100%'
    }
})
