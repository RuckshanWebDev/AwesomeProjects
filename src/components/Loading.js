import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import Style from '../css'

const Loading = () => {
  return (
    <>
    <View style={styles.bg} >
      <View style={styles.container}>
        <Text style={[Style.h3]} >Loading...</Text>
      </View>
       <BlurView
          intensity={10}
          style={{flex: 1, }}
          />
    </View>
    </>
  )
}

export default Loading

const styles = StyleSheet.create({
    bg:{
        backgroundColor : "#6b6ed480",
        position : 'absolute',
        height : '100%',
        width : '100%',
        left : 0,
        top : 0,
        zIndex : 10

    },
    container:{
      position: 'absolute', 
      top: 0, 
      left: 0,
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center',
      zIndex : 11
    }
})