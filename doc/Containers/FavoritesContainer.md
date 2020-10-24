## Favorites Container

- In order to get the favorites images from the imgur API, the favorite container calls this function :

```
updateFavorites() {
        const { username, accessToken } = this.props        
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
```

- **Container for the favorite view**
 
- Props :

| Name  | Type  | Description
|---|---|---|
| username  | String  | Currently logged in user's username  |
|  accessToken | String  | Current sesssion access token given by imgur API  |

