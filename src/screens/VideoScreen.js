import { SafeAreaView, StyleSheet, ScrollView, TouchableHighlight, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Style, { colors } from '../css'
import Video from 'react-native-video';
import VideoDataSet from '../Tracks/VideoDataSet';
import Loading from '../components/Loading'


const VideoPlayers = ({ route }) => {

  console.log(route.params);
  const [data, setData] = useState(undefined)
  const [load, setLoad] = useState(false)

  const videoOnBuffer = ()=>{
    console.log('Buffering');
    setLoad(true)
  }
  const videoOnError = ()=>{
    console.log('Error');
  }

  const ref = useRef()
  console.log(data?.links[0].link);

  useEffect(()=>{
    setData(VideoDataSet[route.params])
  }, [])

  return (
    <>
   { 
    data ?  
    <SafeAreaView style={styles.bg} >
        <View style={{ flex :1 }} >
          <View style={{ position : 'relative' }} >
            <Video 
                // source={require('../assert/video/1.mp4')}   // Can be a URL or a local file.
                source={{ uri : data?.links[0].link, type: 'mp4'}}   // Can be a URL or a local file.                      // Store reference
            // Callback when video cannot be loaded
                style={styles.backgroundVideo} 
                // hideShutterView={true}
                controls={true}
                
                />
               { load && <Text style={[Style.span, styles.loadingText]} >Loading...</Text>}
                </View>

            {/* Video Content */ }
            <ScrollView style={{ padding : 5, width : '100%', flex: 1, gap:10}} >
              <View style={{ flex :0, gap : 0 }} >
                <Text style={[Style.h5, { fontWeight : "500" }]} >{ data?.title || 'VideoPlayer Title goes here!'}</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >By Julian</Text>
              </View>

              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10, marginTop : 30 }} >
                <Text style={[Style.p, { fontWeight : "400" , flexBasis : '30%' }]} >Author:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >Julian</Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >Duration:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >10.20</Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >About:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >Copyrights</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >@2023 Appropriate World</Text>
              </View>

              {/* Related Video */}
              {
                data.playlist &&
                <>
                <Text style={[Style.h5, { fontWeight : "500", marginTop: 20 }]} >Episodes</Text>
                <ScrollView horizontal={true} >
                <View style={styles.grid} >
                { data.links.map((item)=>{
                  return(
                    <TouchableOpacity style={styles.box3} key={item['playlist-id']} >
                      <Image style={styles.image}  source={{uri : item.img}} />
                      <Text key={item.name} style={[Style.h5, styles.text, { fontWeight : 800 }]} >{item.name}</Text>
                    </TouchableOpacity                                                                               >
                  )
                }) }
                </View>
                </ScrollView>
              </>
              }
              {/* <FlatList 
                style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }}
                data={arr}
                renderItem={(item)=>{
                //   <View style={styles.box3} >
                //   <Image source={} />
                // </View>
                <Text key={item.name} style={Style.h1} >{item.name}</Text>
                } }
                keyExtractor={(item) => item.id}
              /> */}
              {/* <ScrollView>
                <View style={styles.grid} >
                 
                </View>
              </ScrollView> */}

            </ScrollView>       

        </View>
    </SafeAreaView>
    :
    <Loading />
     }
    </>
  )
}

export default VideoPlayers

const styles = StyleSheet.create({
  bg:{
    backgroundColor : colors.primary,    
    flex : 1,
    paddingBottom : 0,
    width: '100%'
  },
  backgroundVideo: {
    width : '100%',
    height:300,
    backgroundColor : colors.dark
  },
  box3: {
    backgroundColor: '#651064',
    width: 280,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden',
  },
  grid: {
    paddingVertical : 10,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    position : 'absolute',
    bottom : 5,
    left : 5
  },
  loadingText : {
    position : 'absolute',
    top : '50%',
    left : '45%',
    // transform : [
    //   { translateX : '-50%' }, 
    //   {translateY : '-50%'}
    // ]
  }

})