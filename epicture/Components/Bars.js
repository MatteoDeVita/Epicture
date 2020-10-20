import React from 'react'
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

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const InterfacesWithDownBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'photos', title: 'Photos', icon: 'google-photos' },
    { key: 'upload', title: 'Upload', icon: 'cloud-upload' },
    { key: 'search', title: 'Search', icon: 'crop' },
    { key: 'favorites', title: 'Favorites', icon: 'star' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    photos: Photos,
    upload: AlbumsRoute,
    search: Search,
    favorites: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export  {TopBar, InterfacesWithDownBar};