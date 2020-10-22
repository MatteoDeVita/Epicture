import React from 'react'
import { Component } from 'react'
import Photos from "../Components/Photos.component"
import LoadingIndicator from '../Components/LoadingIndicator.component'
import ErrorDialog from '../Components/ErrorDialog.component'

const loadingIndicator = () => (
    <LoadingIndicator
        loading={loading}
    />
)

export default class PhotosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            error: ''
        }
        this.updateData = this.updateData.bind(this)
    }

    updateData() {
        console.log('UPDATE DATA')
        const { username, accessToken } = this.props
        fetch(`https://api.imgur.com/3/account/${username}/images`, {
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
                        link: value.link,
                        title: value.title,
                        name: value.name,
                        description: value.description
                    })),
                    loading: false
                })
            }
        })
        .catch(err => console.error(err))
        .finally(() => {})
    }

    componentDidMount() {
        this.updateData()
    }

   
    render() {
    
    const { loading, data, error } = this.state
    if (error !== '') {
        return (
            <ErrorDialog
                visible
                message='An error occured while trying to fetch the user images'
                errorMessage={error}
                onPressHandler={() => this.setState({error: ''})}
            />
        )
    }
    return (
        <Photos
            data={data}
            refreshHandler={this.updateData}
        />
        )
    }
}
