import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {Text} from 'react-native-paper'
import ImagePicker from 'react-native-image-picker';

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
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 300, height: 300 }}
          />
          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>       
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