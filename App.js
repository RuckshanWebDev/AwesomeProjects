import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Provider, useSelector } from 'react-redux'
import store from './store'

import {HomeScreen} from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BlogScreen from './src/screens/BlogScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import {Image, View, StyleSheet, StatusBar} from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import {BlurView} from '@react-native-community/blur';
import MusicPlayer from './src/screens/MusicPlayer';
import SingleBlog from './src/screens/SingleBlog';
import AddBlog from './src/components/AddBlog';
import { colors } from './src/css';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ChatScreen from './src/screens/ChatScreen';
import MessageScreen from './src/screens/MessageScreen';
import CommunityScreen from './src/screens/CommunityScreen';

// Icons
import HomeIcon from './asset/icons/house-chimney.png'
import ActivityIcon from './asset/icons/rss.png'
import MessageIcon from './asset/icons/chat.png'
import BlogIcon from './asset/icons/blog-pencil.png'
import ProfileIcon from './asset/icons/circle-user.png'
import FlashMessage from 'react-native-flash-message';
import Wrapper from './Wrapper';

const Tab = createBottomTabNavigator();
const Screen = createStackNavigator();

const MenuBlur = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 55,
          overflow: 'hidden',
        }}>
        <BlurView
          intensity={10}
          style={{flex: 1, backgroundColor: 'rgba(61, 53, 105, 0.5)'}}
        />
      </View>
    </View>
  );
};

const App = () => {
  return(
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
      />
      <Wrapper />
    </Provider>
  )
}

export default App;

