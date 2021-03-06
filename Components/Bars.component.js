import React, {useState} from 'react'
import { Appbar,  BottomNavigation, Text } from 'react-native-paper'
import { Platform, View} from 'react-native'
import SearchContainer from '../Containers/Search.container'
import Icon from 'react-native-vector-icons/FontAwesome'
import UploadContainer from '../Containers/Upload.container'
import PhotosContainer from '../Containers/Photos.container'
import FavoritesContainer from '../Containers/Favorites.container'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const InterfacesWithDownBar = ({username, accessToken}) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState(
    [
      { key: 'photos', title: 'Photos', icon: 'google-photos' },
      { key: 'upload', title: 'Upload', icon: 'cloud-upload' },
      { key: 'search', title: 'Search', icon: 'magnify' },
      { key: 'favorites', title: 'Favorites', icon: 'star' }
    ]
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'photos':
        return (
          <PhotosContainer
            username={username}
            accessToken={accessToken}
          />
        )
      case 'upload':
        return <UploadContainer
          username={username}
          accessToken={accessToken}
        />;
      case 'search':
          return <SearchContainer
            accessToken={accessToken}
          />;
      case 'favorites':
          return <FavoritesContainer
            username={username}
            accessToken={accessToken}
          />
    }
  }

  return (
      <BottomNavigation
        activeColor='rgb(238, 154, 35)'
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
  );
};

export  {InterfacesWithDownBar};
