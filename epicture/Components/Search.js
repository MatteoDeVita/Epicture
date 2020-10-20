import React from 'react'
import {Text ,Button, TextInput} from 'react-native-paper'
import AppStyles from './AppStyles';
import { View , FlatList} from 'react-native'

const Search = () => {
    return (
     
        <View style={AppStyles.globalView}>
            <TextInput placeholder="titre du film"/>
            <Button title="rechercher" onPress={() => {}} />

            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>
     
    )
};

export default Search
