## Photos Container

- In order to get the user's images from the imgur API, the photos container calls this function :

```
updateData() {
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
```

- **Container for the photos view**
 
- Props :

| Name  | Type  | Description
|---|---|---|
| username  | String  | Currently logged in user's username  |
|  accessToken | String  | Current sesssion access token given by imgur API  |

