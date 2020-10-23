import React, { useEffect, useState } from 'react'
import { View , FlatList, ScrollView} from 'react-native'
import { refresh } from 'react-native-app-auth'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Text ,Button, TextInput, Card, Title, Paragraph, IconButton} from 'react-native-paper'
import { acc } from 'react-native-reanimated'
import { useScreens } from 'react-native-screens'
import RefreshButton from '../Components/RefreshButton.component'
import CardStyles  from '../stylesheets/Card.stylesheet'
import ViewStyles from '../stylesheets/View.stylesheet'

const CardActions = ({imageId, favorite, accessToken}) => {
    const [loading, setLaoding] = useState(false)
    const [favoriteState, setFavoriteState] = useState(favorite)
    return (
        <Card.Actions>
            <IconButton
                style={{marginLeft: '85%'}}
                icon={favoriteState ? 'check-underline-circle' : loading ? 'loading' : 'star'}
                color='rgb(113, 32, 244)'
                animated
                onPress={() => {
                    setLaoding(true)
                    if (!favorite) {
                        fetch(`https://api.imgur.com/3/image/${imageId}/favorite`, {
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        })
                        .then(response => response.json())                    
                        .then(json => {
                            console.log("JSON : ", json)
                            if (json.status == 200)
                                setFavoriteState(true)
                        })
                    setLaoding(false)
                    }
                }}
            />
        </Card.Actions>
    )
}

const DataDisplayer = ({data, accessToken}) => {
    return data.map((elem, index) => (
        <Card
            key={index}
            style={CardStyles.global}
        >
            <Card.Title
                title={elem.title != null ? elem.title : elem.name}                
            />
            <Card.Content>                
                <Paragraph>{elem.description != null ? elem.description : ''}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: elem.link }} />
            <CardActions
                imageId={elem.id}
                favorite={elem.favorite}
                accessToken={accessToken}
            />
        </Card>
    ))
}

const Photos = ({data, refreshHandler, accessToken}) => {
    return (
        <View
            style={ViewStyles.global}
        >
           <RefreshButton
                refreshHandler={refreshHandler}
           />
            <ScrollView>
                <DataDisplayer
                    data={data}
                    accessToken={accessToken}
                />
            </ScrollView>
        </View>
    )
};

export default Photos
