import LinearGradient from 'react-native-linear-gradient'
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
const EpictureLogo = ({}) => {
    return (       
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
                'rgba(244, 161, 32, 0.95)',
                'rgb(113, 32, 244)'
            ]}
            style={styles.globalView}
        >
            <Text
                style={styles.text}
            >
                EPIMGUR
            </Text>
        </LinearGradient>                
    )
}

export default EpictureLogo

const styles = StyleSheet.create({
    globalView: {     
        borderWidth: 5,
        borderRadius: 50,
        borderColor: 'transparent',
        marginLeft: '30%',
        marginRight: '30%',
        marginTop: '15%',
        width: '40%',
        paddingTop: '2%',        
        paddingBottom: '2%',
    },
    text: {
        color: 'rgb(214, 205, 190)',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'SansitaSwashed-VariableFont_wght'
    }

})