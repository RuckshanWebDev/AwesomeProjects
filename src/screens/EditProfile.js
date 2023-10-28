import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Style, { colors } from '../css'
import { useSelector } from 'react-redux'
import { useGetProfileQuery, useUpdateProfileMutation } from '../features/profileApi'
import { useFocusEffect } from '@react-navigation/native'

const EditProfile = () => {

  const [name, setName] = useState('')
  const [creator, setCreator] = useState('')
  const [dob, setDob] = useState('')
  const [location, setLocation] = useState('')
  const [interest, setInterest] = useState('')
  const { token } = useSelector(state=>state.local)
  const getProfileFn = useGetProfileQuery(token)
  const [updateProfileFn, updateProfileData ] = useUpdateProfileMutation()

  console.log(updateProfileData);

  const formHandler = ()=>{
    console.log(token);
    if(token) updateProfileFn({token, data : {name, profession : creator, dob, address : location, hobby : interest} })
  }

useFocusEffect(
  useCallback(() => {
      console.log(token);
      console.log(getProfileFn);
      if(getProfileFn.isSuccess){
        console.log(getProfileFn?.data.data[0].name);
        setName(getProfileFn?.data.data[0].name)
        }
  }, []))

  useEffect(()=>{
    // setName("Ruck")
  },[getProfileFn.data])



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