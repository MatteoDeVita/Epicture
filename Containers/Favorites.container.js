import React from 'react'
import { Component } from 'react';
import Favorites from '../Components/Favorites.component'

export default class FavoritesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: false,
            loading: false
        }
        this.updateFavorites = this.updateFavorites.bind(this)
    }

    updateFavorites() {
        const { username, accessToken } = this.props
        console.log('UPDATE DATA FAVORITES')
        this.setState({loading: true})
        fetch(`https://api.imgur.com/3/account/${username}/favorites`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json.status != 200)
                this.setState({
                    error: json.data.error,
                    loading: false
                })
            else {
                this.setState({
                    data: json.data.map(value => ({
                        id: value.id,
                        link: value.link,
                        title: value.title,
                        name: value.name,
                        description: value.description
                    })),
                    loading: false
                })
            }
        })
        .catch(err => {
            this.setState({error: true})
            console.error(err)
        })
    }

    componentDidMount() {
        this.updateFavorites()
    }

    render() {
        const { username, accessToken } = this.props
        const { data } = this.state
        console.log('DATA : ', data)
        return (
            <Favorites
                data={data}
                refreshHandler={this.updateFavorites}
                username={username}
                accessToken={accessToken}
            />
        )
    }
}