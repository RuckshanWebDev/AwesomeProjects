import {Image,SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity, RefreshControl } from 'react-native';
import Style from '../css';
import {BlurView} from '@react-native-community/blur';
import {colors} from '../css';
import FloatButton from '../components/FloatButton';
import Post from '../components/Post';
import { useGetBlogsQuery } from '../features/blogApi';
import Loading from '../components/Loading'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const BlogScreen = ({navigation}) => {

  const [refreshing, setRefreshing] = useState(false);
  const [blog, setBlog] = useState([]);

  const blogPressHandler = (id)=>{
    navigation.navigate('SingleBlog',  { blogId : id });
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const blogs = useGetBlogsQuery()
  useEffect(()=>{
    if(blogs.isSuccess){
      setBlog(blogs.data.data)
    }

  },[blogs.isSuccess])
  console.log(blog);

  return (

    <>
    {
      blogs.isLoading ? 
      <Loading />
      :
      <SafeAreaView style={[style.bg, Style.pbM]} >
      <FloatButton type={'add'} redirect={'AddBlog'} />
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {
          blogs.isSuccess && blog.map(item=>{

            return (<TouchableOpacity key={item._id} style={[style.blog, Style.mbM]} onPress={()=>blogPressHandler(item._id)} >
                <Post text={true} image={true} item={item} />
              </TouchableOpacity >
            )

          })
        }
      </ScrollView>
    </SafeAreaView>}
    </>
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
