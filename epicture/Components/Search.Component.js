import React, { useState } from 'react'
import { Button, TextInput, Card, Title, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

const SearchQueryDisplayer = ({data, queryString}) => {    

    if (data.length === 0)
        return null
    return data.map((elem, index) => (
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
    const [queryString, setQueryString] = useState("")
    return (
        <ScrollView>
            <TextInput
                placeholder="Photo's name"
                onChangeText={text => setQueryString(text)}
            />
            <Button
                title="rechercher"
                onPress={() => searchFunction(queryString)}
            >
                rechercher
            </Button>
            <SearchQueryDisplayer
                data={data}
                queryString={queryString}
            />
        </ScrollView>
     
    )
};

export default Search
