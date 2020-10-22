import React, { useState } from 'react'
import { Button, TextInput, Card, Title, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { View, VirtualizedList } from 'react-native'
import VideoPlayer from 'react-native-video-player'

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
            <Paragraph>{elem.description != null ? elem.description : ''}</Paragraph>
        </Card.Content>
        {
            (elem.links.map((link, index) => {
                return link.endsWith('.mp4') ?
                (
                    <VideoPlayer
                        key={index}
                        video= {{ uri: link }}
                        autoplay={true}
                        defaultMuted={true}
                        pauseOnPress={true}
                        fullScreenOnLongPress={true}
                        loop={true}
                        
                    />
                )
                :
                (
                    <Card.Cover key={index} source={{ uri: link }} />
                )
            }))
        }
        <Card.Actions>
        </Card.Actions>
        </Card>
    ))
}

const Search = ({searchFunction, data}) => {
    const [queryString, setQueryString] = useState("")
    return (
        <View>
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
            <ScrollView>
                <SearchQueryDisplayer
                    data={data}
                    queryString={queryString}
                    />
            </ScrollView>
        </View>
     
    )
};

export default Search
