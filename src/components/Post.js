import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../css'

const Post = ({text = null, image = null, icon=null, item}) => {
    console.log(item);
  return (
    <View style={styles.postContainer} >
        <View style={[styles.postHeader, Style.row, { gap : 15, alignItems :'center' }]} >
            <Image style={Style.avatarProfileSm} source={ item.author.profile_image ? { uri : item.author.profile_image } : require('../assert/icons/avatar.jpg')} />
            <View>
                <Text style={[Style.h5]} >{ item.author.name } </Text>
                <Text style={[Style.span]} >{ item.author.profession }</Text>

            </View>
            <TouchableOpacity style={{ marginLeft : 'auto' }} >
                <Image style={[Style.icon]} source={require('../assert/icons/dots.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.postContent} >
            { image && <Image style={styles.postContentImage} source={require('../assert/p2.jpg')} />}
            { text &&  <Text style={[Style.span , {padding : 10}]} >{item.content}</Text>}
            </View>
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