import React from 'react'
import { Component, useState } from 'react';
import { View, ScrollView } from 'react-native'
import ViewStyles from '../stylesheets/View.stylesheet'
import RefreshButton from '../Components/RefreshButton.component'
import {Text ,Button, TextInput, Card, Title, Paragraph, IconButton} from 'react-native-paper'
import CardStyles from '../stylesheets/Card.stylesheet'
import { useScreens } from 'react-native-screens';

const FavoriteCardActions = ({imageId, accessToken}) => {
    const [loading, setLaoding] = useState(false)
    const [unfavoritedState, setUnfavoritedState] = useState(false)
    return (
        <Card.Actions>
            <IconButton
                style={{marginLeft: '85%'}}
                icon={unfavoritedState ? 'star' : loading ? 'loading' : 'delete'}
                color='rgb(113, 32, 244)'
                animated
                onPress={() => {
                    setLaoding(true)
                    fetch(`https://api.imgur.com/3/image/${imageId}/favorite`, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        }
                    })
                    .then(response => response.json())
                    .then(json => {
                        if (json.status == 200)
                            setUnfavoritedState(!unfavoritedState)
                    })
                    .catch(err => console.error(err))
                    setLaoding(false)
                }}
            />
        </Card.Actions>
    )
}

const FavoritesDisplayer = ({ data, username, accessToken }) => {
    
    if (data === undefined || data.length === 0)
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
            <Card.Cover source={{ uri: elem.link }}/>
            <FavoriteCardActions 
                imageId={elem.id}
                accessToken={accessToken}
            />
        </Card>
    ))
}

export default class Favorites extends Component {
    render() {
        const { data, refreshHandler, username, accessToken } = this.props
        return (
            <View
                style={ViewStyles.global}
            >
                <RefreshButton
                    refreshHandler={refreshHandler}
                />
                <ScrollView>
                    <FavoritesDisplayer
                        data={data}
                        username={username}
                        accessToken={accessToken}
                    />
                </ScrollView>
            </View>
        )
    }
}