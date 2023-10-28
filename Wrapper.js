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
import EditProfile from './src/screens/EditProfile';

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


const Wrapper = () => {

  const {auth, token} = useSelector(state=> state.local)
  console.log(auth, token);

  const BottomTabs = ()=>{
    return (
        <Tab.Navigator
          initialRouteName='Profile'
          screenOptions={{
            headerBackTitleVisible: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarBackground: () => <MenuBlur />,
            tabBarStyle: {
              borderColor: 'transparent',
              backgroundColor: 'transparent',
              opacity: 1,
              position: 'absolute',
            },
          }}>

          {/* Bottom Bar */}
          <Tab.Screen style={style.main} name="Home" component={HomeScreen} options={{
              headerShown: false,
              tabBarIcon: () => (<View>
                  <Image width={25} height={25} style={style.icon} resizeMode='contain' source={HomeIcon}/>
                </View>),
            }}
          />

          <Tab.Screen name="Activity" component={ActivityScreen} options={{
              headerShown: false,
              tabBarIcon: () => ( <View>
                  <Image width={25} height={25} style={style.icon} resizeMode="cover" source={ActivityIcon} />
                </View>),
            }}
          />

          <Tab.Screen name="Chat" component={ChatScreen} options={{
              headerShown: false,
              tabBarIcon: () => (<View>
                  <Image width={25} height={25} style={style.icon} resizeMode="cover" source={MessageIcon} />
                </View>),
            }}
          />

          <Tab.Screen name="BLog" component={BlogScreen} options={{
              headerShown: false,
              tabBarIcon: () => (<View>
                  <Image width={25} height={25} style={style.icon} resizeMode="cover" source={BlogIcon} />
                </View>),
            }}
          />

          <Tab.Screen name="Profile" component={ProfileScreen} options={{
              headerShown: false,
              tabBarIcon: () => (<View>
                  <Image width={25} height={25} style={style.icon} resizeMode="cover" source={ProfileIcon} />
                </View>),
            }}
          />
    </Tab.Navigator>
    )   
  }

  return (
      <NavigationContainer>
        
        {
          !auth ?

          <Screen.Navigator >
            <Screen.Screen  name="Welcome" component={WelcomeScreen} options={{tabBarButton: props => null, headerShown: false}}/>

            <Screen.Screen  name="Register" component={RegisterScreen} options={{tabBarButton: props => null, headerShown: false}}/>

            <Screen.Screen  name="Login" component={LoginScreen} options={{tabBarButton: props => null, headerShown: false}}/>

          </Screen.Navigator>

          :
            <>
          <Screen.Navigator
            initialRouteName="BottomTab"
            screenOptions={{   
                headerBackTitleVisible: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarBackground: () => <MenuBlur />,
                tabBarStyle: {
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    opacity: 1,
                    position: 'absolute',
                },
            }}>
            <Screen.Screen name="BottomTab" component={BottomTabs} />
            {/* Other Screens */}
            <Screen.Screen  name="Music"
            component={MusicPlayer}
            options={{tabBarButton: props => null, headerShown: false}}/>

            <Screen.Screen
            name="SingleBlog"
            component={SingleBlog}
            options={ ({ route }) => ({
                // gestureEnabled: true,
                headerStyle: {backgroundColor: '#110428'},
                headerTintColor: '#fff',
                headerBackTitleVisible: true,
                tabBarButton: props => null,
                }) }
            />
            <Screen.Screen
            name="AddBlog"
            component={AddBlog}
            options={ {
                tabBarStyle: { display: "none" },
                tabBarButton: ()=> false,
                headerShown: true,
                title : 'Add a Blog',
                headerTitleStyle : {
                color : '#fff'
                },
                headerStyle : {
                backgroundColor : colors.primary,
                }
                } }
            />
            <Screen.Screen
            name="Message"
            component={MessageScreen}
            options={ {
                tabBarStyle: { display: "none" },
                tabBarButton: ()=> false,
                headerShown: false,
                title : 'Add a Blog',
                headerTitleStyle : {
                color : '#fff'
                },
                headerStyle : {
                backgroundColor : colors.dark,
                }
                } }
            />

            <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={ {
                tabBarStyle: { display: "none" },
                tabBarButton: ()=> false,
                headerShown: false,
                title : 'Add a Blog',
                headerTitleStyle : {
                color : '#fff'
                },
                headerStyle : {
                backgroundColor : colors.dark,
                }
                } }
            />

            <Screen.Screen
            name="Profile"
            component={ProfileScreen}
            />

            <Screen.Screen
            name="EditProfile"
            component={EditProfile}
            />

            

          </Screen.Navigator>

        </>
        }

        <FlashMessage position="top" />
      </NavigationContainer>
  );
};



export default Wrapper;

const style = StyleSheet.create({
  icon: { width: 25, height: 25},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 30,
    right: 0,
  },
});