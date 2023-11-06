import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Style from '../css'

import FloatButton from '../components/FloatButton'
import { useGetProfileQuery } from '../features/profileApi'
import { useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import Loading from '../components/Loading'

export default function ChatScreen({ navigation }) {

  const { token } =  useSelector(state=> state.local)
  const profile = useGetProfileQuery(token)
  
  const redirectChat = ()=>{
    navigation.navigate('Message')
  }
  
  useFocusEffect(
    useCallback(() => {
      console.log(profile);
    }, [])
  )

  return (

    <>
      {profile.isLoading ?

      <Loading />
      :
      profile.isSuccess && 
      <SafeAreaView style={[Style.bg, Style.pbM]} >
          <FloatButton type={'community'} redirect={'Community'} />
          
          <ScrollView>
            <Text style={[Style.h2, { paddingVertical : 15 }]} >Chat</Text>

            {/* Chat List */}
            { profile.data?.data[0].friendList.length 
              ?
              profile.data?.data[0].friendList.map((item) => {
                return(<TouchableOpacity onPress={redirectChat} style={styles.chatbar} key={item._id} >
                  <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
                  <View style={styles.chatbarContent} >
                    <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>{item.name}</Text>
                    <Text style={[Style.span, { color : '#e5e5e5' }]}>{item.profession}</Text>
                    <Text style={[Style.span, styles.date, { color : '#eee' }]}>{ Date( item.createdAt).slice(3, 16)} </Text>
                  </View>
                </TouchableOpacity> )
            })
            :
            <Text style={[Style.h4, { paddingVertical : 15 }]}>No Friend</Text>
            
            }

           

           
          </ScrollView>
      </SafeAreaView>
      }
      </>
  )
}

const styles = StyleSheet.create({
  chatbar : {
    flex : 1,
    flexDirection : 'row',
    height : 70,
    // backgroundColor : '#fff',
    alignItems : 'center',
    gap : 15
  },
  chatbarContent : {
    position : 'relative',
    flex : 1
  },
  date:{
    position : 'absolute',
    top : 10,
    right : 10
  }
})