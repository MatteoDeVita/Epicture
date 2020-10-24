import React, { useState } from 'react'
import { Button, TextInput, Card, Paragraph, IconButton } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { View, VirtualizedList } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import CardStyles from '../stylesheets/Card.stylesheet'
import SearchStyles from '../stylesheets/Search.stylesheet'

const SearchCardActions = ({imageId,  accessToken}) => {
    const [loading, setLaoding] = useState(false)
    const [favoriteState, setFavoriteState] = useState(false)
    return (
        <Card.Actions>
            <IconButton
                style={{marginLeft: '85%'}}
                icon={favoriteState ? 'check-underline-circle' : loading ? 'loading' : 'star'}
                color='rgb(113, 32, 244)'
                animated
                onPress={() => {
                    setLaoding(true)
                    if (!favoriteState) {
                        fetch(`https://api.imgur.com/3/image/${imageId}/favorite`, {
                            method: 'POST',
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            }
                        })
                        .then(response => response.json())
                        .then(json => {
                            if (json.status == 200)
                                setFavoriteState(true)
                        })
                        .catch(err => console.error(err))
                    setLaoding(false)
                    }
                }}
            />
        </Card.Actions>
    )
}

const SearchQueryDisplayer = ({data, accessToken}) => {    
    if (data.length === 0)
        return null
    return data.map((elem, index) => (
        <Card
            key={index}
            style={CardStyles.global}
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
                        <View key={index}>
                            <Card.Cover source={{ uri: link }}/>
                            <SearchCardActions
                                imageId={elem.ids[index]}
                                accessToken={accessToken}
                            />
                        </View>
                    )
                }))
            }
        </Card>
    ))
}

const Search = ({searchFunction, data, accessToken}) => {
    const [queryString, setQueryString] = useState("")
    return (
        <View style={SearchStyles.topView}>
            <View>
                <TextInput
                    placeholder="What are you looking for ?"
                    onChangeText={text => setQueryString(text)}
                    style={SearchStyles.textInput}
                    mode="outlined"
                />
                <Button                
                    onPress={() => searchFunction(queryString)}
                    style={SearchStyles.searchButton}
                    color='white'                    
                >
                    Search
                </Button>
            </View>
            <ScrollView>
                <SearchQueryDisplayer
                    data={data}
                    accessToken={accessToken}
                />
            </ScrollView>
        </View>
     
    )
};

export default Search
