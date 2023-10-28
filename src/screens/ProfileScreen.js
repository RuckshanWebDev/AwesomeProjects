import {Image,  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Style, {colors} from '../css';
import FloatButton from '../components/FloatButton'
import { useGetProfileQuery } from '../features/profileApi';
import { useDispatch, useSelector } from 'react-redux';
import { removeValue } from '../utils/AsyncStorage';
import { setToken } from '../features/localSlice';
import { useEffect, useCallback } from 'react';
import Loading from '../components/Loading';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = () => {

  const dispatch = useDispatch()
  const { token } = useSelector(state=>state.local)
 

  const logout = ()=>{
        removeValue('token')
        dispatch(setToken(null))
    }

    const getProfileFn = useGetProfileQuery(token)
    console.log('>>>>>>>>>>', getProfileFn);
    
    useFocusEffect(
      useCallback(() => {
       
    }, [])
  )

  
  return <>{
      getProfileFn.isLoading ?
      <Loading />
      :
      <>
      <SafeAreaView style={[style.container, Style.pbL]}>
        <FloatButton type={'edit'} redirect={'EditProfile'} />
        <ScrollView>
          <View
            style={[
              style.profileBg,
              Style.column,
              Style.ptM,
              {alignItems: 'center'},
            ]}>
            <Image
              style={[Style.avatarProfile, Style.mbS]}
              source={require('../assert/pp.jpg')}
            />
            <Text style={Style.h1}>{getProfileFn?.data?.data[0].name || "Name"} </Text>
            <Text style={Style.h3}>{getProfileFn?.data?.data[0].profession || "No Profession"} </Text>
            <Text style={Style.p}>
            {getProfileFn?.data?.data[0].bio || "Add your Bio"}
            </Text>
          </View>

          <View style={[Style.mtM, {padding: 10}]}>
            <Text
              style={[
                Style.h3,
                {borderBottomColor: '#ffffff', borderBottomWidth: 1},
              ]}>
              About
            </Text>

            <View
              style={[
                Style.row,
                Style.mtM,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image style={style.icon} source={require('../assert/icons/name.png')} />
              <Text style={Style.h5}>{getProfileFn?.data?.data[0].name || "Name"}</Text>
            </View>
            <View
              style={[
                Style.row,
                Style.mtS,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image style={style.icon} source={require('../assert/icons/dob.png')} />
              <Text style={Style.h5}>{getProfileFn?.data?.data[0].dob || "DOB"}</Text>
            </View>
            <View
              style={[
                Style.row,
                Style.mtS,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image
                style={style.icon}
                source={require('../assert/icons/creator.png')}
              />
              <Text style={Style.h5}>{getProfileFn?.data?.data[0].profession || "No Profession"}</Text>
            </View>
            <View
              style={[
                Style.row,
                Style.mtS,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image
                style={style.icon}
                source={require('../assert/icons/location.png')}
              />
              <Text style={Style.h5}>{getProfileFn?.data?.data[0].location || "Location"}</Text>
            </View>
            <View
              style={[
                Style.row,
                Style.mtS,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image
                style={style.icon}
                source={require('../assert/icons/interest.png')}
              />
              <Text style={Style.h5}>{getProfileFn?.data?.data[0].hobby[0] || "Interested"}</Text>
            </View>
          </View>
          <Button title={'Logout'} onPress={logout} />
        </ScrollView>
      </SafeAreaView>
      </>
      }
    </>
};

export default ProfileScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  profileBg: {
    backgroundColor: colors.primary ,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
