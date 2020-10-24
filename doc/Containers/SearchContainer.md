## Search Container

- In order to get the searched images from the imgur API, the search container calls this function :

```
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
```

- **Container for the search view**
 
- Props :

| Name  | Type  | Description
|---|---|---|
|  accessToken | String  | Current sesssion access token given by imgur API  |

