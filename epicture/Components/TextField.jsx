import React, { Fragment } from 'react'
import {
    StyleSheet,    
    TextInput,
    View
} from 'react-native'

const TextField = ({ style, placeholder }) => {
    return (
        <View style={styles.Fragment}>
            <TextInput
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Fragment: {
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: 'rgba(113, 32, 244, 0.8)',
        borderRadius: 20,
        backgroundColor: 'white',        
    }
})

export default TextField
