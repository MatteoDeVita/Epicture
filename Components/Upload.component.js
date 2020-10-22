import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import UploadStyles from '../stylesheets/Upload.stylesheet'
import LoadingIndicator from '../Components/LoadingIndicator.component'

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            image: {},
            imageSelected: false,
            postTitle: '',
        };
      this.selectFile = this.selectFile.bind(this)
    }
    
    selectFile = () => {
      ImagePicker.showImagePicker({title: 'Select Image'}, response => {
        if (response != undefined && response.data != undefined) {
          this.setState({
            image: response,   
            imageSelected: true       
          })
        }
      })
    }

  render() {
    const { uploadImage, loading } = this.props
    const { image, imageSelected, postTitle } = this.state
    if (loading) {
      return (
        <LoadingIndicator
          loading
        />
      )
    }
    return (
      <View style={UploadStyles.globalView}>
          <TextInput
            label="Post title"
            onChangeText={text => this.setState({postTitle: text})}
            mode='outlined'
            style={UploadStyles.textInput}            
          />
            <Image
              source={{ uri: this.state.image.uri }}
              style={UploadStyles.image}
            />
            <TouchableOpacity onPress={this.selectFile} style={UploadStyles.button}>
                <Text style={UploadStyles.buttonText}>SELECT FILE</Text>
            </TouchableOpacity>
            
              <Button
                icon="cloud-upload"
                mode="contained" onPress={() => uploadImage(image, postTitle)}
                disabled={!imageSelected}
                style={UploadStyles.sendButton}
                >
                  SEND
              </Button>
          </View>
    )
  }
}
