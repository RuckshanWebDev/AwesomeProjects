import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import Style, { colors } from '../css'
import { useDispatch, useSelector } from 'react-redux'
import { useAddFriendMutation, useGetContactQuery, useLazyGetProfileQuery, useRemoveFriendMutation } from '../features/profileApi'
import { useFocusEffect } from '@react-navigation/native'
import Loading from '../components/Loading'
import RefectchProfile from '../utils/RefectchProfile'
import { setUser } from '../features/localSlice'

const CommunityScreen = () => {

  const { token, user } = useSelector(state => state.local)
  const contacts = useGetContactQuery({token})
  const [addFriend] = useAddFriendMutation()
  const [renoveFriend] = useRemoveFriendMutation()
  const [profileFn, profileData] = useLazyGetProfileQuery()
  const dispatch = useDispatch()

  const friendListHandler =async (val, friendId)=>{
    console.log(friendId);
    if(val === 'ADD'){
      const response = await addFriend({token, id : user._id, friendId}).unwrap()
      const newProfile = await profileFn(token).unwrap()
      dispatch(setUser(newProfile.data[0]))
    }else{
      const response = await renoveFriend({token, id : user._id, friendId}).unwrap()
      const newProfile = await profileFn(token).unwrap()
      dispatch(setUser(newProfile.data[0]))
    }
    
  }
  
  useFocusEffect(
    useCallback(() => {

  }, [])
)

  return (<>

   { contacts.isLoading ? 
   <Loading/>
   :   
   <SafeAreaView style={[styles.bg]} >
       <ScrollView  >
          <Text style={[Style.h2, { paddingVertical : 15}]} >Community</Text>

         {contacts.isSuccess && contacts.data.data.map((item)=>{  
            if(user._id === item._id) return
            return (
              <View style={styles.contact} key={item._id} >
              <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
                <View style={styles.details} >
                  <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>{item.name}</Text>
                  <Text style={[Style.p, { color : '#e5e5e5' }]}>{item.profession}</Text>
                </View>
                { user.friendList.map(i => i._id).includes(item._id)? 
                 <TouchableOpacity style={styles.btn2} onPress={()=>friendListHandler('REMOVE', item._id)}>
                   <Image source={require('../assert/icons/unlike.png')} style={styles.icon} />
                   <Text style={styles.btnText2} >REMOVE</Text>
               </TouchableOpacity>
                :
                <TouchableOpacity style={styles.btn} onPress={()=>friendListHandler('ADD', item._id)} >
                  <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                  <Text style={styles.btnText} >ADD</Text>
                </TouchableOpacity> 
                }
            </View>
            )
          })}       
       </ScrollView>
    </SafeAreaView>}
  </>
  )
}

export default CommunityScreen

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    flex : 1,
    padding : 10
  },
  contact : {
    // backgroundColor : '#fff',
    height : 70, 
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10
  },
  details: {

  },
  btn:{
    marginLeft : 'auto',
    backgroundColor : '#fff',
    padding : 10,
    borderRadius : 5,
    display : 'flex',
    flexDirection :"row",
    alignContent : 'center',
    justifyContent : 'center',
    gap : 8,
  },
  btnText :{
    color : colors.secondry,
    fontWeight : '700'
  },
  btn2:{
    marginLeft : 'auto',
    backgroundColor : 'transparent',
    borderColor : '#fff',
    borderWidth : 2,
    padding : 10,
    borderRadius : 5,
    display : 'flex',
    flexDirection :"row",
    alignContent : 'center',
    justifyContent : 'center',
    gap : 8
  },
  btnText2:{
    color : colors.thursary,
    fontWeight : '700'
  },
  icon : {
    width : 20,
    height : 20
  }
})