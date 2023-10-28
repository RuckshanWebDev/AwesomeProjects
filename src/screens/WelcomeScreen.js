import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Style, { colors } from '../css'

const WelcomeScreen = ({ navigation }) => {



  return (
    <>
    {/* <View style={styles.bg} >
      <Image style={styles.cover} source={require('../assert/welcome2.png')} />
    </View> */}
    <View style={{ flex : 1, alignItems : 'center', justifyContent:'space-around', backgroundColor : colors.primary    }} >
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Register')} >
      <Image style={styles.logo}  source={require('../assert/logo.gif')} />
      {/* <View>
      <Text style={styles.text} >Welcome to</Text>
      <Text style={styles.text2} >Appropriate World</Text>
      </View> */}
        {/* <Text style={Style.p} >Get Started</Text> */}
      </TouchableOpacity>
    </View>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  bg: {
    position : 'absolute',
    width : '100%',
    height : '100%',
  },
  cover:{
    width : '100%',
    height : '100%',
  },
  text : {
    // marginTop : 55,
    fontSize : 26,
    color : '#fff',
    fontWeight : '400',
    color: '#eee',
    opacity : 0.8,
    textAlign : 'center'
  },
  text2 : {
    marginTop: -15,
    fontSize : 60,
    color : '#fff',
    fontWeight : '500',
    textAlign : 'center'
  },
  logo : {
      width : 230,
      objectFit : 'fill',
      height : 120,
      // marginTop : 80
  },
  btn: {
    backgroundColor : colors.primary,
    // marginTop : 50,
    padding : 10,
    borderRadius : 13,
  }
})