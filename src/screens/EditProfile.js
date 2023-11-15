import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Style, { colors } from '../css'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileQuery, useUpdateProfileMutation } from '../features/profileApi'
import { useFocusEffect } from '@react-navigation/native'
import { storeData } from '../utils/AsyncStorage'
import { setUser } from '../features/localSlice'
import { showMessage } from 'react-native-flash-message'

const EditProfile = ({navigation}) => {

  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [creator, setCreator] = useState('')
  const [dob, setDob] = useState('')
  const [location, setLocation] = useState('')
  const [interest, setInterest] = useState('')
  const { token, user } = useSelector(state=>state.local)
  // const getProfileFn = useGetProfileQuery(token)
  const [updateProfileFn, updateProfileData ] = useUpdateProfileMutation()


  const formHandler = async ()=>{
    console.log(token);
    if(token) {
      try{

        showMessage({
          autoHide : false,
          type: "success",
          message: "Profile Updating",
          description: "Please wait",
          backgroundColor: colors.primary
        })

        const responce = await updateProfileFn({token, data : {name, profession : creator, dob, address : location, hobby : interest} }).unwrap()
        console.log(responce.data);
        dispatch(setUser(responce.data))
        console.log(user, '😀😀😀😀😀');

        showMessage({
          autoHide : true,
          type: "success",
          message: "Profile Updated",
        })

        navigation.navigate('BottomTab')

      }catch(err){
        console.log(err);
      }
    } 
  }

  useFocusEffect(
  useCallback(() => {
    if(user){
      console.log(user);

      setName(user.name)
      setCreator(user.profession)
      setDob(user.dob)
      setLocation(user.address)
      setInterest(user.hobby[0])
      
    }
  }, []))


  return (
    <View style={styles.bg} >
        <Text style={Style.h4} >Add Details</Text>

        <Text style={[Style.p, Style.mlS, Style.mtM]} >Name</Text>
        <TextInput style={Style.inputFullWidth} value={name} onChangeText={value => setName(value)} />

        <Text style={[Style.p, Style.mlS, Style.mtS]} >Creator Type</Text>
        <TextInput style={Style.inputFullWidth} value={creator} onChangeText={value => setCreator(value)}/>

        <Text style={[Style.p, Style.mlS, Style.mtS]} >DOB</Text>
        <TextInput style={Style.inputFullWidth} value={dob} onChangeText={value => setDob(value)} />

        <Text style={[Style.p, Style.mlS, Style.mtS]} >Location</Text>
        <TextInput style={Style.inputFullWidth} value={location} onChangeText={value => setLocation(value)} />
       
        <Text style={[Style.p, Style.mlS, Style.mtS]} >Interests</Text>
        <TextInput style={Style.inputFullWidth} value={interest} onChangeText={value => setInterest(value)} />

        <TouchableOpacity style={[Style.mtM, Style.btn]} onPress={formHandler} ><Text style={Style.p} >Post</Text></TouchableOpacity>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    bg: {
        padding : 10,
        flex : 1,
        backgroundColor : colors.primary
    }
})