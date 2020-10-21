import LinearGradient from 'react-native-linear-gradient'
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import EpictureLogoStyle from '../stylesheets/EpictureLogo.stylesheet'

const EpictureLogo = ({}) => {
    return (       
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
                'rgba(244, 161, 32, 0.95)',
                'rgb(113, 32, 244)'
            ]}
            style={EpictureLogoStyle.globalView}
        >
            <Text
                style={EpictureLogoStyle.text}
            >
                EPIMGUR
            </Text>
        </LinearGradient>                
    )
}

export default EpictureLogo
