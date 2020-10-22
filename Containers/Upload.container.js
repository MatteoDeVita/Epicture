import React, {useState, useEffect, Component } from 'react'
import Upload from '../Components/Upload.component'

export default class UploadComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        this.uploadImage = this.uploadImage.bind(this)
    }

    uploadImage(image) {
        const { accessToken } = this.props
        const data = new FormData()
        
        data.append('image', image.data)
        fetch('https://api.imgur.com/3/upload', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: data
        })
        .then(() => {
            this.setState({
                loading: false
            })
        })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <Upload
                uploadImage={this.uploadImage}
            />
        )
    }
}
