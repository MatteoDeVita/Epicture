import React, {useState, useEffect, Component } from 'react'
import Upload from '../Components/Upload.component'
import ErrorDialog from '../Components/ErrorDialog.component'


export default class UploadComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: ''
        }
        this.uploadImage = this.uploadImage.bind(this)
    }

    uploadImage(image, postTitle) {
        this.setState({
            loading: true
        })        
        const { accessToken } = this.props
        const data = new FormData()
        data.append('image', image.data)
        data.append('title', postTitle)
        console.log('posttitle : ', postTitle)
        fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: data
        })
        .then((response) => {
            this.setState({
                loading: false
            })
            return response.json()
        })
        .then(json => {
            if (json.status != 200)
                this.setState({
                    error: json.data.error
                })
        })
        .catch(err => console.error(err))
    }

    render() {
        const { error, loading } = this.state
        if (error !== '') {
            return (
                <ErrorDialog
                    visible
                    message='Error while trying to upload your image'
                    errorMessage={error}
                    onPressHandler={() => this.setState({error: ''})}
                />
            )
        }
        return (
            <Upload
                loading={loading}
                uploadImage={this.uploadImage}
            />
        )
    }
}
