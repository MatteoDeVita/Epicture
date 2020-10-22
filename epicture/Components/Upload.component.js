import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import {Button, Text} from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import UploadStyles from '../stylesheets/Upload.stylesheet'

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            image: {}
        };
      this.selectFile = this.selectFile.bind(this)
    }
    
    selectFile = () => {
        var options = {
            title: 'Select Image'
        };

      ImagePicker.showImagePicker({title: 'Select Image'}, response => {
        this.setState({
          image: response
        })
      })
    }

  render() {
    const { uploadImage } = this.props
    const { image } = this.state
    return (
        <View style={UploadStyles.container}>
          <Image
            source={{ uri: this.state.image.uri }}
            style={{ width: 300, height: 300 , margin:20}}
          />
          <TouchableOpacity onPress={this.selectFile} style={UploadStyles.button}  >
              <Text style={UploadStyles.buttonText}>Select File</Text>
          </TouchableOpacity>
          
            <Button icon="cloud-upload" mode="contained" onPress={() => uploadImage(image)}>
                SEND
            </Button>
        </View>
    )
  }
}
