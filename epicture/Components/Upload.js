import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {Button, Text} from 'react-native-paper'
import ImagePicker from 'react-native-image-picker';


function handleClick() {  
    console.log('Le lien a été cliqué.')
    /*fetch(`https://api.imgur.com/3/upload`, {
        headers: {
            Authorization: `Bearer ${this.props.accessToken}`
        }
    })*/
 };
 

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            resourcePath: {},
        };
    }
    
    selectFile = () => {
        var options = {
            title: 'Select Image'
        };

    ImagePicker.showImagePicker(options, res => {
        console.log('Response = ', res);
        let source = res;
        this.setState({
          resourcePath: source,
        });
    });
  };

  render() {
    const { username, accessToken } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 300, height: 300 , margin:20}}
          />
          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>
          
            <Button icon="cloud-upload" mode="contained" onPress={handleClick}>
                SEND
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});