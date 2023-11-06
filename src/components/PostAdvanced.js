import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../css'
import { useSelector } from 'react-redux'
import { useLikeTweetMutation } from '../features/forumApi'

const PostAdvanced = ({text = null, image = null,  item, likeHandlerReAdapt }) => {

    const { user, token } = useSelector(state=>state.local)

    const likeHandler = (id,liked)=>{
        console.log(liked)
        likeFn({ id, token, liked })
        likeHandlerReAdapt(id, liked)
    }

    const [likeFn, likeData] = useLikeTweetMutation()
    console.log(likeData);

  return (
    <View style={styles.postContainer} >
        <View style={[styles.postHeader, Style.row, { gap : 15, alignItems :'center' }]} >
            <Image style={Style.avatarProfileSm} source={require('../assert/p3.jpg')} />
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
            { text &&  <Text style={[Style.span , {padding : 10}]} >{item.text}</Text>}
            </View>

      <View style={[styles.postFooter, Style.row,Style.pbS, { alignItems :'center', justifyContent : 'space-around' }]} >
            <TouchableOpacity onPress={()=>likeHandler(item._id, item.likes.includes(user._id))} style={{ flex :0 , flexDirection : 'row' }}  >
                {
                    item.likes.length && item.likes.includes(user._id) ?
                    <Image style={[Style.icon]} source={require('../assert/icons/reacted.png')}  />
                    :
                    <Image style={[Style.icon]} source={require('../assert/icons/heart.png')} />
                }
                <Text style={[Style.p, { marginLeft : 5 }]} > {item.likes.length ? item.likes.length : ' ' } </Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={[Style.icon]} source={require('../assert/icons/chat-bubble.png')} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PostAdvanced

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