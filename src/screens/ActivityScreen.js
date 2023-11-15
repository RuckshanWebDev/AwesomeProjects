import {SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import Style, { colors } from '../css';
import Post from '../components/Post';
import { useCreateTweetMutation, useGetAllTweetsQuery, useLazyGetAllTweetsQuery } from '../features/forumApi';
import PostAdvanced from '../components/PostAdvanced';
import { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading'
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const ActivityScreen =() => {

  const { token, user } = useSelector(state=> state.local)

  const [text, setText] = useState()
  const [allActivity , setAllActivity] = useState([])
  const activity = useGetAllTweetsQuery()
  const [activityFn] = useLazyGetAllTweetsQuery()
  const [createTweetfn ] =  useCreateTweetMutation()
  console.log(activity);

  
  

  const formHandler = ()=>{
    console.log(text);
    createTweetfn({ token, data : { text } })
    reFetch()
  }

  useEffect(()=>{
    if(activity.isSuccess){
      setAllActivity(activity.data.data)
    }
  },[])
  
  const reFetch = async ()=>{
    try{
      const res = await activityFn().unwrap()
      setAllActivity(res.data)
    }catch(err){

    }
  }

  const likeHandlerReAdapt = (id, liked)=>{
    console.log(user._id);
      const newArr = allActivity
      const likedArray = newArr.map(i => {

        if (i._id === id) {

            const newObj = { ...i }
            newObj.likes = [...newObj.likes]
            liked === true ?
                newObj.likes.indexOf(user._id) > -1 && newObj.likes.splice(newObj.likes.indexOf(user._id, 1))
                :
                newObj.likes.push(user._id)
            return newObj
        }
        return i
    })
    setAllActivity(likedArray)

  }

  useFocusEffect(
    useCallback( () => {
      reFetch()
    }, [])
  )


  return (<>
  {activity.isLoading ?
        <Loading />
        :
    <SafeAreaView style={[styles.bg, Style.pbM]}>
      <ScrollView>
        <View style={[styles.row,]} >
          <Image style={Style.avatarProfileS} source={require('../assert/p1.jpg')} />
          <TextInput style={styles.input} placeholder="What's on your mind..." placeholderTextColor='#fff' multiline={true} underlineColorAndroid='transparent' numberOfLines={3}
           onChangeText={value => setText(value)} />
        <View style={ { flex : 0 , flexDirection : 'column',  justifyContent : 'center', alignItems : 'center' } } >
          <TouchableOpacity><Image style={styles.uploadIcon} source={require('../assert/icons/gallery.png')} /></TouchableOpacity>
          <TouchableOpacity style={{marginTop : 15}} onPress={formHandler} ><Image style={Style.icon} source={require('../assert/icons/send-message.png')}  /></TouchableOpacity>
        </View>
        </View>
        {activity.isSuccess && activity.data.data.length ?

        allActivity.map(item=>{
          return <PostAdvanced key={item._id} text={'text'} icon={true} item={item} likeHandlerReAdapt={likeHandlerReAdapt}/>
        })

        :
        <Text style={[Style.h5, { textAlign : 'center' }]} >No Activities Yet</Text>
        }
      </ScrollView>
    </SafeAreaView>
    }
    </>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  bg : {
    backgroundColor : colors.primary,
    flex : 1,
  },
  row: {
    paddingHorizontal : 10,
    paddingVertical : 10,
    flex : 1,
    flexDirection : 'row',
    gap : 6,
    height : 'auto',
    alignItems :'flex-start',
    borderColor : "#fff",
    borderBottomWidth : 0.3

  },
  input:{
    textAlignVertical: 'top',
    paddingHorizontal : 15,
    color : "#fff",
    // borderWidth: 2,
    padding : 10,
    borderRadius : 10,
    fontSize: 18,
    backgroundColor : colors.secondry,
    flexGrow :1,
    height : 85
  },
  uploadIcon : {
    width : 40,
    height : 40
  }
})
