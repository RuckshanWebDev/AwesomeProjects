import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Style from '../css'

import FloatButton from '../components/FloatButton'

export default function ChatScreen({ navigation }) {

  const redirectChat = ()=>{
    navigation.navigate('Message')
  }

  return (
      <SafeAreaView style={[Style.bg, Style.pbM]} >
          <FloatButton type={'community'} redirect={'Community'} />
          
          <ScrollView>
            <Text style={[Style.h2, { paddingVertical : 15 }]} >Chat</Text>

            {/* Chat List */}
            <TouchableOpacity onPress={redirectChat} style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatbar} >
              <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
              <View style={styles.chatbarContent} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
                <Text style={[Style.span, styles.date, { color : '#eee' }]}>12/03/2023</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  chatbar : {
    flex : 1,
    flexDirection : 'row',
    height : 70,
    // backgroundColor : '#fff',
    alignItems : 'center',
    gap : 15
  },
  chatbarContent : {
    position : 'relative',
    flex : 1
  },
  date:{
    position : 'absolute',
    top : 5,
    right : 0
  }
})