import React, {useState} from 'react'
import { Appbar,  BottomNavigation, Text } from 'react-native-paper'
import { Platform} from 'react-native'
import Photos from './Photos.Component';
import SearchContainer from '../Containers/Search.Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotosContainer from '../Containers/Photos.Container'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopBar = () => {
    return (
    <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    )
};

const AlbumsRoute = () => <Text>Test1</Text>;
const RecentsRoute = () => <Text>Test2</Text>;

const InterfacesWithDownBar = ({username, accessToken}) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState(
    [
      { key: 'photos', title: 'Photos', icon: 'google-photos' },
      { key: 'upload', title: 'Upload', icon: 'cloud-upload' },
      { key: 'search', title: 'Search', icon: 'crop' },
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
        return <Upload/>;
      case 'search':
          return <SearchContainer/>;
      case 'favorites':
          return <RecentsRoute/>;
    }
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export  {TopBar, InterfacesWithDownBar};
