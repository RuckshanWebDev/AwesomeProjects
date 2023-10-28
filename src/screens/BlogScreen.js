import {Image,SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import Style from '../css';
import {BlurView} from '@react-native-community/blur';
import {colors} from '../css';
import FloatButton from '../components/FloatButton';
import Post from '../components/Post';

const BlogScreen = ({navigation}) => {

  const blogPressHandler = ()=>{
    navigation.navigate('SingleBlog');
  }

  return (
    <SafeAreaView style={[style.bg, Style.pbM]}>
      <FloatButton type={'add'} redirect={'AddBlog'} />
      <ScrollView>
        <TouchableOpacity key={1} style={[style.blog, Style.mbM]} onPress={blogPressHandler} >
        <Post text={true} image={true} />
        </TouchableOpacity >
        <TouchableOpacity key={2} style={[style.blog, Style.mbM]} onPress={blogPressHandler} >
        <Post text={true} image={true} />
        </TouchableOpacity >
        <TouchableOpacity key={3} style={[style.blog, Style.mbM]} onPress={blogPressHandler} >
        <Post text={true} image={true} />
        </TouchableOpacity >
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;

const style = StyleSheet.create({
  bg: {
    backgroundColor: colors.dark,
    padding: 10,
    flex: 1,
  },
  blog: {
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    // padding: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  blogCover: {
    width: '100%',
    objectFit: 'cover',
    height: 200,
    borderRadius: 10,
  },  
});
