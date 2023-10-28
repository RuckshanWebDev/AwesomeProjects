import {StyleSheet, Image,TouchableOpacity, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Style, { colors } from '../css';
import Slider from '@react-native-community/slider';



const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.bg} >
      <View style={{ flex : 1, flexDirection : 'column', padding : 10,gap : 10,
            backgroundColor : colors.primary, width : '100%', alignItems : 'center',paddingBottom : 80, justifyContent : 'flex-end'
        }} >

          <Text style={[Style.h4, { textAlign : 'center' }]} >Music title goes here</Text>
          <Image source={require('../assert/p3.jpg')} style={[styles.cover, Style.mtS]} />

          {/* TITLE */}
          <View>
            <Text style={[Style.h4, { textAlign : 'center', fontWeight :"400" }]} >Music title goes here</Text>
            <Text style={[Style.h5, { textAlign : 'center', fontWeight :"600" }]} >by Anirudh</Text>
          </View>


          {/* TIMELINE */}
          <Slider
            style={{width: '90%', height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.secondry}
            maximumTrackTintColor={colors.secondry}
            />
          <View style={[Style.row, {  alignSelf : 'flex-start', marginHorizontal : 'auto', width : '100%', paddingHorizontal : '5%' }]} >
            <Text style={Style.span} >0.00</Text>
            <Text style={[Style.span, { marginLeft : 'auto' }]} >3.42</Text>
          </View>
                
          {/* BUTTON OPTIONS */}
          <View style={[Style.row, {justifyContent : 'space-evenly' , alignItems : 'center', gap : 35,  height : 'auto'} ]} >
            <TouchableOpacity style={styles.btn} >
              <Image style={Style.iconL} source={require('../assert/icons/shuffle.png')} />
            </TouchableOpacity>
            <TouchableOpacity  >
              <Image style={Style.iconS} source={require('../assert/icons/step-backward.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundBtn} >
              <Image style={Style.iconL} source={require('../assert/icons/play.png')} />
            </TouchableOpacity>
            <TouchableOpacity  >
              <Image style={Style.iconS} source={require('../assert/icons/step-forward.png')} />
            </TouchableOpacity>
            <TouchableOpacity  >
              <Image style={Style.iconL} source={require('../assert/icons/loop.png')} />
            </TouchableOpacity>
          </View>


      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  bg:{
    backgroundColor : colors.primary,    
    flex: 1
  },
  cover : {
    width : 300,
    height : 300,
    borderRadius : 10,
    marginHorizontal : 'auto'
  },
  btn:{

  },
  roundBtn:{
    backgroundColor : colors.secondry,
    padding : 20,
    borderRadius : 100
  }

});


