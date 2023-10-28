import { SafeAreaView, ScrollView, StyleSheet, Text, View,TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Style, { colors } from '../css'


const AddBlog = () => {
//
//  const ImageHandler = async ()=>{
//
//    const options = {
//      mediaType: 'photo',
//      includeBase64: false,
//      maxHeight: 2000,
//      maxWidth: 2000,
//    };
//
//    // try {
//    //   const result = await launchCamera(options)
//    //   console.log(result);
//
//    // } catch (error) {
//    //   console.log("😎😎😎😎", error);
//    // }
//
//    launchImageLibrary(options, (response) => {
//      if (response.didCancel) {
//        console.log('User cancelled image picker');
//      } else if (response.error) {
//        console.log('Image picker error: ', response.error);
//      } else {
//        let imageUri = response.uri || response.assets?.[0]?.uri;
//       console.log(imageUri);
//      }
//    });
//
//  }

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView >
        <View>
          <Text style={[Style.p, Style.mlS]} >Title</Text>
          <TextInput placeholder='Title for the Blog'  placeholderTextColor="#fff"  style={[Style.inputFullWidth, Style.mbM]} />

          <Button title='Image Upload' color={colors.secondry} />

          <Text style={[Style.p, Style.mlS, Style.mtM]} >Content</Text>
          <TextInput multiline={true} numberOfLines={4} style={Style.inputFullWidth} />

          <TouchableOpacity style={[Style.mtM, Style.btn]} ><Text style={Style.btnText} >Post</Text></TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddBlog

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    padding: 10,
    flex: 1,
  }
})