import React from 'react'
import { View , FlatList} from 'react-native'
import {Text ,Button, TextInput, Card} from 'react-native-paper'

const Search = ({username, accessToken}) => {
    let elems = []
    fetch(`https://api.imgur.com/3/account/${username}/images`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(json => {
        elems = json.data.map(value => ({
            link: value.link,
            title: value.title,
            name: value.name
        }))
        console.log(elems)
    })
    .catch(error => console.error(error))
    return (
        <View></View>
        // {
        //     elems.map(elem =>)
        // }
    )
};

export default Search

/*
<FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <ImagesRender/>}
            />

*/ 