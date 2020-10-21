import React, { useEffect, useState } from 'react'
import { View , FlatList, ScrollView} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Text ,Button, TextInput, Card, Title, Paragraph} from 'react-native-paper'

const DataDisplayer = ({data}) => {
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
                <Button>Supprimer</Button>
            </Card.Actions>
        </Card>
    ))
}

const Photos = ({data}) => {
    return (
        <ScrollView>
            <DataDisplayer
                data={data}
            />
        </ScrollView>
    )
};

export default Photos