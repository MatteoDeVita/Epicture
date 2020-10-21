// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import FilmItemStyle from '../stylesheets/FilmItem.stylesheet'

const FilmItem = () => {
    return (
      <View style={FilmItemStyle.main_container}>
        <Image
          style={FilmItemStyle.image}
          source={{uri: "image"}}
        />
        <View style={FilmItemStyle.content_container}>
          <View style={FilmItemStyle.header_container}>
            <Text style={FilmItemStyle.title_text}>Titre du film</Text>
            <Text style={FilmItemStyle.vote_text}>Vote</Text>
          </View>
          <View style={FilmItemStyle.description_container}>
            <Text style={FilmItemStyle.description_text} numberOfLines={6}>Description</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={FilmItemStyle.date_container}>
            <Text style={FilmItemStyle.date_text}>Sorti le 00/00/0000</Text>
          </View>
        </View>
      </View>
    )
}

export default FilmItem