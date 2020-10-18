import React from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
class Log extends React.Component {
    render() {
        return (
            <View style={{flex:1, marginTop:20, backgroundColor:'yellow'}}>
                <View style={{flex:1, backgroundColor:'red'}}>
                    <Text style={styles.text, {}}>Login Page</Text>
                </View>

                <View style={{flex:2, padding:5}}>
                    <Text style={styles.text}>Imgur Email</Text>
                    <TextInput title="MAIL" style={styles.textinput} placeholder="ex:lorris.hamdaoui@epitech.eu"/>
                    <Text style={styles.text}>Imgur Pass</Text>
                    <TextInput title="PASS" style={styles.textinput} placeholder="ex: Mimi1906"/>
                </View>

                <View style={{flex:1, backgroundColor:'green', padding:50}}>
                    <Button title="CONNECT" style={{}} onPress={function() {}}/>
                </View>
            </View>
        )
    }
}

function redirect() {
    return (
      <div>
        BLABLA
      </div>
    );
  }

const styles = StyleSheet.create ({
    textinput: {
        marginLeft:5,
        marginRight:5,
        height:50,
        borderWidth:1
    },
    text: {
        marginTop:10,
        paddingLeft:5,
        backgroundColor:'orange',
        marginLeft:5,
        marginRight:5,
        height:20,
        borderWidth:1
    }
})

export default Log