import React from 'react'
import { Button } from 'react-native-paper'
import RefreshButtonStyles from '../stylesheets/RefreshButton.stylesheet'

export default RefreshButton = ({refreshHandler}) => (
    <Button
        onPress={refreshHandler}
        style={RefreshButtonStyles.general}
        color='white'
        icon='reload'
    >
        REFRESH
    </Button>
)
