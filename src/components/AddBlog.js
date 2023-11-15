import { SafeAreaView, ScrollView, StyleSheet, Text, View,TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import Style, { colors } from '../css'
import { useCreateBlogMutation } from '../features/blogApi'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import ImageUploader, { ImageConstructor } from '../utils/ImageUpload'


const AddBlog = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [model, setModel] = useState(false)

  const { token } = useSelector(state => state.local)
  const [addBlogFn, addBlog] = useCreateBlogMutation()

  console.log(addBlog);

  const imageHandler = async (source)=>{
    const imageHandlerBlog = new ImageConstructor(source, 'blog_images')
    const preview = await imageHandlerBlog.getPreview()
    console.log(preview);
  }

  const formHandler = async ()=>{
    console.log(title, content);

    try {
      
      await addBlogFn({token, data : { content, title } }).unwrap()
      showMessage({
        message: "Blog Addedd",
        type: "success",
      });    
    } catch (error) {
      showMessage({
        message: "Blog Failed",
        description: "Something went wrong, Please try again!",
        type: "danger",
      });    
      
    }
  }


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
    <SafeAreaView style={styles.bg} onPointerEnter={()=> console.log("fffffffffff")} >
      { model && <View style={Style.model} >
          <TouchableOpacity style={Style.modelBtn} onPress={()=>imageHandler('gallery')} ><Text style={Style.modelBtnText} >Choose from Gallery</Text></TouchableOpacity>
          <TouchableOpacity style={Style.modelBtn} onPress={()=>imageHandler('camera')} ><Text style={Style.modelBtnText}>Open Camera</Text></TouchableOpacity>
        </View>}
      <ScrollView >
        <View>
          <Text style={[Style.p, Style.mlS]} >Title</Text>
          <TextInput placeholder='Title for the Blog'  placeholderTextColor="#fff"  style={[Style.inputFullWidth, Style.mbM]} onChangeText={ value => setTitle(value) }/>

          <Button title='Image Upload' color={colors.secondry} onPress={()=>setModel(true)} />

          <Text style={[Style.p, Style.mlS, Style.mtM]} >Content</Text>
          <TextInput multiline={true} numberOfLines={4} style={Style.inputFullWidth} onChangeText={ value => setContent(value) }/>

          <TouchableOpacity style={[Style.mtM, Style.btn]} onPress={formHandler} ><Text style={Style.btnText} >Post</Text></TouchableOpacity>

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