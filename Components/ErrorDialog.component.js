import React from 'react'
import { Button, Dialog, Paragraph } from 'react-native-paper'

export default ErrorDialog = ({visible, message, errorMessage, onPressHandler}) => (
    <Dialog
        visible={visible}
        >
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Content>
            <Paragraph>{message}</Paragraph>
            <Paragraph>{errorMessage}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
            <Button
                onPress={onPressHandler}
            >
                OK
            </Button>
        </Dialog.Actions>
    </Dialog>
)
