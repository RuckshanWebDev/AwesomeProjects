import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../css'

const Post = ({text = null, image = null, icon=null}) => {
  return (
    <View style={styles.postContainer} >
        <View style={[styles.postHeader, Style.row, { gap : 15, alignItems :'center' }]} >
            <Image style={Style.avatarProfileSm} source={require('../assert/p3.jpg')} />
            <View>
                <Text style={[Style.h5]} >Ruckshan</Text>
                <Text style={[Style.span]} >Developer</Text>

            </View>
            <TouchableOpacity style={{ marginLeft : 'auto' }} >
                <Image style={[Style.icon]} source={require('../assert/icons/dots.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.postContent} >
            { image && <Image style={styles.postContentImage} source={require('../assert/p2.jpg')} />}
            { text &&  <Text style={[Style.span , {padding : 10}]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>}
            </View>

       { icon && <View style={[styles.postFooter, Style.row,Style.pbS, { alignItems :'center', justifyContent : 'space-around' }]} >
            <TouchableOpacity >
                <Image style={[Style.icon]} source={require('../assert/icons/heart.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={[Style.icon]} source={require('../assert/icons/chat-bubble.png')} />
            </TouchableOpacity>
        </View>}
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    postContainer : {
        borderColor : '#fff',
        borderBottomWidth :0.5,

    },
    postHeader : {
        padding : 10,
    },
    postContent : {
        height : 'auto'
    },
    postContentImage : {
        objectFit : 'fill',
        height : 300,
        width : '100%'
    },
    postFooter : {
        paddingTop : 5,
        marginBottom : 20
    },

})