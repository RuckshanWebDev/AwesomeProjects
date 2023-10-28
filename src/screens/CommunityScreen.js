import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style, { colors } from '../css'

const CommunityScreen = () => {
  return (
    <SafeAreaView style={[styles.bg]} >
       <ScrollView  >
          <Text style={[Style.h2, { paddingVertical : 15}]} >Community</Text>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
                <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                <Text style={styles.btnText} >ADD</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn2} >
                <Image source={require('../assert/icons/unlike.png')} style={styles.icon} />
                <Text style={styles.btnText2} >REMOVE</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn2} >
                <Image source={require('../assert/icons/unlike.png')} style={styles.icon} />
                <Text style={styles.btnText2} >REMOVE</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn2} >
                <Image source={require('../assert/icons/unlike.png')} style={styles.icon} />
                <Text style={styles.btnText2} >REMOVE</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn2} >
                <Image source={require('../assert/icons/unlike.png')} style={styles.icon} />
                <Text style={styles.btnText2} >REMOVE</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
                <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                <Text style={styles.btnText} >ADD</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
                <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                <Text style={styles.btnText} >ADD</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
                <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                <Text style={styles.btnText} >ADD</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contact} >
            <Image source={require('../assert/pp.jpg')} style={Style.avatarProfileS} />
              <View style={styles.details} >
                <Text style={[Style.h4, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.p, { color : '#e5e5e5' }]}>Developer</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
                <Image source={require('../assert/icons/like.png')} style={styles.icon} />
                <Text style={styles.btnText} >ADD</Text>
              </TouchableOpacity>
          </View>
          
        
       </ScrollView>
    </SafeAreaView>
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