## Upload Container

- In order to upload an image, the upload container calls this function :

```
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
```

- **Container for the upload view**
 
- Props :

| Name  | Type  | Description
|---|---|---|
| username  | String  | Currently logged in user's username  |
|  accessToken | String  | Current sesssion access token given by imgur API  |

