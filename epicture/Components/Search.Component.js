import React, { useState } from 'react'
import {Text ,Button, TextInput} from 'react-native-paper'
import { View , FlatList} from 'react-native'
import films from '../Helpers/filmsData.js'
import ImagesRender from './ImagesRender'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

const DataDisplayer = data => {
    data.map((elem, index) => (
        <Card
            key={index}
        >
        <Card.Title
            title={elem.title != null ? elem.title : elem.name}
            subtitle={elem.title != null ? elem.name : ''}
        />
        <Card.Content>
            <Title>{elem.title != null ? elem.title : ''}</Title>
            <Paragraph>{elem.description != null ? elem.description : ''}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: elem.link }} />
        <Card.Actions>
        </Card.Actions>
        </Card>
    ))
}

const Search = ({searchFunction, data}) => {
    const [queryString, setQueryString] = useState('')
    return (
        <ScrollView>
            <TextInput
                placeholder="Photo's name"
                onChange={text => setQueryString(text)}
            />
            <Button
                title="rechercher"
                onPress={() => searchFunction(queryString)}
            >
                rechercher
            </Button>
            <DataDisplayer
                data={data}
            />
        </ScrollView>
     
    )
};

export default Search
