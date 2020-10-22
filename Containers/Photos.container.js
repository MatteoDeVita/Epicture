import React, {useState, useEffect} from 'react'
import { Component } from 'react';
import Photos from "../Components/Photos.component"
import { View } from 'react-native';
import LoadingIndicator from '../Components/LoadingIndicator.component'

export default class PhotosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        const { username, accessToken } = this.props
        fetch(`https://api.imgur.com/3/account/${username}/images`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState(
                {
                    data: json.data.map(value => ({
                        link: value.link,
                        title: value.title,
                        name: value.name,
                        description: value.description
                    })),
                    loading: false
                })            
        })
        .catch(err => console.error(err))
        .finally(() => {})
    }

    render() {        
        const { loading, data } = this.state
        if (loading) {
            return (
                <View>
                    <LoadingIndicator
                        loading={loading}
                    />
                    <Photos
                        data={data}
                    />
                </View>
            )
        }
        else {
            return (
            <View>
                <Photos
                    data={data}
                />
            </View>
            )

        }
    }
}
