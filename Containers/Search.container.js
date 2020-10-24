import React, { useState, useEffect, Component } from 'react'
import { View } from 'react-native';
import Search from '../Components/Search.component'

export default class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.updateData = this.updateData.bind(this)
    }

    updateData(queryString) {
        console.log('queryString : ', queryString)
        fetch(`https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=${queryString}`, {
            headers: {
                Authorization: 'Client-ID 06a2f239b8f71ea'
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json.data.slice(0, 15).map(item => {
                    return ({
                        ids: item.images != undefined ? item.images.map(image => image.id) : [item.id],
                        links: item.images != undefined ? item.images.map(image => image.link) : [item.link],
                        title: item.title,
                        name: item.name,
                        description: item.description
                    })})                    
            })
        })
        .catch(err => console.error(err))
        .finally(() => {})
    }

    render() {
        const { accessToken } = this.props
        const { data } = this.state
        return (
            <View>
                <Search
                    searchFunction={this.updateData}
                    data={data}
                    accessToken={accessToken}
                />
            </View>
        )
    }
}