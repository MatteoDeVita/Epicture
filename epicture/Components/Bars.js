import React, {useState} from 'react'
import { Appbar,  BottomNavigation, Text } from 'react-native-paper'
import { Platform} from 'react-native'
import Photos from './Photos';
import Search from './Search';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopBar = () => {
    return (
    <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    )
};

const AlbumsRoute = () => <Text></Text>;
const RecentsRoute = () => <Text>Recents</Text>;

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
          <Photos
            username={username}
            accessToken={accessToken}
          />
        )
      case 'upload':
        return <AlbumsRoute/>;
      case 'search':
          return <Search/>;
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
