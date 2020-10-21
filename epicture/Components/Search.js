import React from 'react'
import {Text ,Button, TextInput} from 'react-native-paper'
import { View , FlatList} from 'react-native'
import films from '../Helpers/filmsData.js'
import FilmItem from './FilmItem'

const Search = () => {
    return (
     
        <View>
            <TextInput placeholder="titre du film"/>
            <Button title="rechercher" onPress={() => {}} />
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem/>}
            />
        </View>
     
    )
};

export default Search
