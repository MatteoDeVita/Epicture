import React from 'react'
import {Text ,Button, TextInput} from 'react-native-paper'
import { View , FlatList} from 'react-native'
import AppStyles from './AppStyles'
import films from '../Helpers/filmsData.js'
import FilmItem from './FilmItem'

const Search = () => {
    return (
     
        <View style={AppStyles.globalView}>
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
