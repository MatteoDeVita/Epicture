import React from 'react'
import {Text ,Button, TextInput} from 'react-native-paper'
import { View , FlatList} from 'react-native'
import films from '../Helpers/filmsData.js'
import ImagesRender from './ImagesRender'

const Search = (props) => {
    return (
     
        <View>
            <Text>props.name</Text>
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <ImagesRender/>}
            />
        </View>
     
    )
};

export default Search
