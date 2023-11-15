import {StyleSheet, Image,TouchableOpacity, SafeAreaView, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Style, { colors } from '../css';
import Slider from '@react-native-community/slider';
import AudioDataSet from '../Tracks/AudioDataSet'
import TrackPlayer, {State,useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import Loading from '../components/Loading'

const setupPlayer = async()=>{
  console.log("TRACK PLAYER INIT");
  await TrackPlayer.setupPlayer()
}

setupPlayer()

const MusicPlayer =  ({route}) => {

  const {position, duration} = useProgress();
  const [trackTitle, setTrackTitle] = useState();

  
  
  const [data, setData] = useState()
  const [ playing, setPLaying ] = useState(false)
  // const progress = useProgress();
  // console.log(progress);
  
  function format(seconds) {
    let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
    
  const addPlayList = async()=>{
    const track1 = {
      url:  data.links[0].src, // Load media from the network
      title:   data.links[0].name,
      artist: 'deadmau5',
      album: 'while(1<2)',
      genre: 'Progressive House, Electro House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork:  data.coverLink, // Load artwork from the network
      duration: 4020 // Duration in seconds
    }
    await TrackPlayer.add(data.links);


    currentTrack()
    const tracks = await TrackPlayer.getQueue();
  }


  const currentTrack = async ()=>{
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let {title} = await TrackPlayer.getTrack(trackIndex);
    setTrackTitle(title)
  }

  const playHandler = async()=>{
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      console.log('Play');
      TrackPlayer.pause();
      setPLaying(false)
      }else{
        setPLaying(true)
        TrackPlayer.play();
        console.log('Pause');
    }

  }

  const nextHandler = async()=>{
    await TrackPlayer.skipToNext();
    currentTrack()

  }
  const previousHandler = async()=>{
    await TrackPlayer.skipToPrevious();
    currentTrack()

  }

  const timeSeeker = (e)=>{
    console.log(e);
    TrackPlayer.seekTo(e);
  }

  useEffect(()=>{
    TrackPlayer.reset()
  }, [])

  useEffect(()=>{
    setData(AudioDataSet[route.params])
    if(data) {
      addPlayList()
  
    }
  },[data])
  

  return (
    <SafeAreaView style={styles.bg} >
      { data ? 
      <View style={{ flex : 1, flexDirection : 'column', padding : 10,gap : 10,
            backgroundColor : colors.primary, width : '100%', alignItems : 'center',paddingBottom : 80, justifyContent : 'flex-end'
        }} >

          <Text style={[Style.h4, { textAlign : 'center' }]} >{data.title}</Text>
          <Image source={{uri : data.coverLink}} style={[styles.cover, Style.mtS]} />

          {/* TITLE */}
          <View>
            <Text style={[Style.h4, { textAlign : 'center', fontWeight :"400" }]} >{trackTitle}</Text>
            <Text style={[Style.h5, { textAlign : 'center', fontWeight :"600" }]} >by Julian</Text>
          </View>


          {/* TIMELINE */}
          <Slider
            style={{width: '90%', height: 40}}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor={colors.secondry}
            maximumTrackTintColor={colors.secondry}
            onValueChange={timeSeeker}
            value={position}
            />

          <View style={[Style.row, {  alignSelf : 'flex-start', marginHorizontal : 'auto', width : '100%', paddingHorizontal : '5%' }]} >
            <Text style={Style.span} >{format(position)}</Text>
            <Text style={[Style.span, { marginLeft : 'auto' }]} >{format(duration)}</Text>
          </View>
                
          {/* BUTTON OPTIONS */}
          <View style={[Style.row, {justifyContent : 'space-evenly' , alignItems : 'center', gap : 35,  height : 'auto'} ]} >
            <TouchableOpacity style={styles.btn} >
              <Image style={Style.iconL} source={require('../assert/icons/shuffle.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={previousHandler} >
              <Image style={Style.iconS} source={require('../assert/icons/step-backward.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundBtn} onPress={playHandler} >
              {
                 playing ?
                 <Image style={Style.iconL} source={require('../assert/icons/pause.png')} />
                  :
                <Image style={Style.iconL} source={require('../assert/icons/play.png')} />
              }
            </TouchableOpacity>
            <TouchableOpacity  onPress={nextHandler} >
              <Image style={Style.iconS} source={require('../assert/icons/step-forward.png')} />
            </TouchableOpacity>
            <TouchableOpacity  >
              <Image style={Style.iconL} source={require('../assert/icons/loop.png')} />
            </TouchableOpacity>
          </View>


      </View>
      :
      <Loading />
      }
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


