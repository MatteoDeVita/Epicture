// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Images from '../stylesheets/Images.stylesheet'
import { Button, Text} from 'react-native-paper'

const ImagesRender = () => {
    return (
      <View style={Images.main_container}>
        <Image
          style={Images.image}
          source={{uri: "image"}}
        />
        <View style={Images.content_container}>
          <View style={Images.header_container}>
            <Button style={Images.Button} icon="star" mode="contained" onPress={() => {}}>
              Favorite
            </Button>
            <Button style={Images.Button} icon="" mode="contained" onPress={() => {}}>
              Delete
            </Button>
          </View>
        </View>
      </View>
    )
}

export default ImagesRender