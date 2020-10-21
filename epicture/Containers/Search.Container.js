import React, { useState, useEffect, Component } from 'react'
import Photos from "../Components/Photos.Component"
import { View } from 'react-native';
import Search from '../Components/Search.Component'

export default class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []            
        }
    }

    updateData(queryString) {
        fetch(`https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=${queryString}`, {
            headers: {
                Authorization: 'Client-ID 06a2f239b8f71ea'
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json.data.map({
                    link: value.link,
                    title: value.title,
                    name: value.name,
                    description: value.description
                })
            })
        })
        .catch(err => console.error(err))
        .finally(() => {})
    }

    render() {
        const { data } = this.state
        return (
            <View>
                <Search
                    searchFunction={this.updateData}
                    data={data}
                />
            </View>
        )
    }
}