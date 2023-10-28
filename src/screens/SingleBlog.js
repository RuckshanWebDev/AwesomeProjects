import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { colors } from '../css'
import Style from '../css'

const SingleBlog = () => {


  return (
    <SafeAreaView style={[style.bg, Style.pbM]}>
      <ScrollView>
        <Image style={style.headerImage} source={require('../assert/p1.jpg')} />
        <View style={style.blogContent} >
          <Text style={Style.h4} >This is the blog title</Text>
          <Text style={[Style.p, Style.mtS]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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