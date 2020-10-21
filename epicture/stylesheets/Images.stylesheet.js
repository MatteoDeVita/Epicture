import {StyleSheet} from 'react-native'

export default FilmItemStyle = StyleSheet.create({
    main_container: {
      height: 200,
      flexDirection: 'row'
    },
    image: {
      width: 200,
      height: 190,
      margin: 4,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'column',
    },
    Button: {
      padding: 27,
      margin: 2,
      alignItems: "center",
    }
  })