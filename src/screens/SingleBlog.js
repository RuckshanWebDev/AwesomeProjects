import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { colors } from '../css'
import Style from '../css'
import { useGetSigleBlogsQuery } from '../features/blogApi'
import Loading from '../components/Loading'

const SingleBlog = ({route}) => {

  const { blogId } = route.params
  
  const blog =  useGetSigleBlogsQuery(blogId)
  console.log(blog);
  
  return (
    <>
    {
      blog.isLoading ?
    <Loading />
      :
     blog.isSuccess && 
     <SafeAreaView style={[style.bg, Style.pbM]}>
      <ScrollView>
        <Image style={style.headerImage} source={require('../assert/p1.jpg')} />
        <View style={style.blogContent} >
          <Text style={Style.h4} >{blog.data.data.title}</Text>
          <Text style={[Style.p, Style.mtS]} >{blog.data.data.content}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    }
    </>
  )
}

export default SingleBlog

const style = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    // padding: 10,
    flex: 1,
  },
  headerImage: {
    width :'100%',
    height : 250,
    objectFit :'cover'
  },
  blogContent : {
    paddingVertical : 20,
    paddingHorizontal : 10
  }
})