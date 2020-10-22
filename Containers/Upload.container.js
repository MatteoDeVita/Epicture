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
        console.log(image)
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
        .then(json => console.log("json ", json))
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
