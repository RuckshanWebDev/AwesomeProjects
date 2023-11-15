import {Image,  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity

} from 'react-native';
import Style, {colors} from '../css';
import FloatButton from '../components/FloatButton'
import { useGetProfileQuery, useUpdateProfileMutation } from '../features/profileApi';
import { useDispatch, useSelector } from 'react-redux';
import {  removeValue, storeData } from '../utils/AsyncStorage';
import { setToken, setUser } from '../features/localSlice';
import { useEffect, useCallback, useState } from 'react';
import Loading from '../components/Loading';
// import { launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { Alert } from 'react-native';
import ImageUploader from '../utils/ImageUpload';



const ProfileScreen = () => {

  const dispatch = useDispatch()
  const { token, user } = useSelector(state=>state.local)
  const [model, setModel] = useState(false)
 

  const logout = ()=>{
        removeValue('token')
        dispatch(setToken(null))
        dispatch(setUser(false))
  }

  const getProfileFn = useGetProfileQuery(token)
  const [updateProfileFn] = useUpdateProfileMutation()

  
  const imageHandler = async (source)=>{
    const data = await ImageUploader(source, 'profile_images')
    console.log(data);
    const profile = await updateProfileFn({token, data : { profile_image : data.url }}).unwrap()
        console.log(profile, '👿👿👿👿');
        dispatch(setUser(profile.data))

        showMessage({
          autoHide : true,
          type: "success",
          message: "Image Uploaded",
          description: "Please wait",
        })
    setModel(false)
  }

  useEffect(()=>{
    console.log(token);
    if(getProfileFn.isSuccess){
      if(!user){
      console.log('PROFILE SUCCESS');
      console.log('>>>>>>>>>>', getProfileFn);  
      storeData('user', getProfileFn.data.data[0], true);
      dispatch(setUser(getProfileFn.data.data[0]))
      }
    }
  },[getProfileFn.isSuccess])

  
  return <>{
      getProfileFn.isLoading ?
      <Loading />
      :
      <>
      { user && 
      <SafeAreaView style={[style.container, Style.pbL]}>
      { model && <View style={Style.model} >
          <TouchableOpacity style={Style.modelBtn} onPress={()=>imageHandler('gallery')} ><Text style={Style.modelBtnText} >Choose from Gallery</Text></TouchableOpacity>
          <TouchableOpacity style={Style.modelBtn} onPress={()=>imageHandler('camera')} ><Text style={Style.modelBtnText}>Open Camera</Text></TouchableOpacity>
        </View>}
        <FloatButton type={'edit'} redirect={'EditProfile'} />
        <ScrollView>
          <View
            style={[
              style.profileBg,
              Style.column,
              Style.ptM,
              {alignItems: 'center'},
            ]}>
            <TouchableOpacity onPress={()=> setModel(true) } >
              <Image
                style={[Style.avatarProfile, Style.mbS]}
                // source={getProfileFn?.data?.data[0]?.profile_image ? { uri : getProfileFn?.data?.data[0]?.profile_image } : require('../assert/icons/avatar.jpg')}
                source={user.profile_image ? { uri : user.profile_image} : require('../assert/icons/avatar.jpg')  }
                
                />
            </TouchableOpacity>
            <Text style={Style.h1}>{user.name || "Name"} </Text>
            <Text style={Style.h3}>{user.profession || "No Profession"} </Text>
            <Text style={Style.p}>
            {user.bio || "Add your Bio"}
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
              <Text style={Style.h5}>{user?.name || "Name"}</Text>
            </View>
            <View
              style={[
                Style.row,
                Style.mtS,
                {gap: 20, alignItems: 'center', paddingHorizontal: 20},
              ]}>
              <Image style={style.icon} source={require('../assert/icons/dob.png')} />
              <Text style={Style.h5}>{user?.dob || "DOB"}</Text>
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
              <Text style={Style.h5}>{user?.profession || "No Profession"}</Text>
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
              <Text style={Style.h5}>{user?.address || "Location"}</Text>
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
              <Text style={Style.h5}>{user?.hobby[0] || "Interested"}</Text>
            </View>
          </View>

          <TouchableOpacity style={[Style.btn, Style.mtS , { alignSelf : 'center' }]} onPress={logout} >
              <Text style={Style.btnText} >Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      }
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
