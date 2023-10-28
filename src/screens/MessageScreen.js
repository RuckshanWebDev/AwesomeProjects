import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Style, { colors } from '../css'

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.bg} >
        <View style={styles.header} >
            <Image style={Style.avatarProfileS} source={require('../assert/pp.jpg')} />
            <View style={{height : 50}} >
                <Text style={[Style.h5, { fontWeight : '600', marginBottom : 3 }]}>Ruckshan</Text>
                <Text style={[Style.span, { color : '#e5e5e5' }]}>Developer</Text>
            </View>
        </View>
        <ScrollView>
            <View style={styles.content}>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello there</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >How are you?</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello Hello Hello Hello Hello Hello</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >Hey! </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >I am Good, How are you? Thank you for asking. </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello there</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >How are you?</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello Hello Hello Hello Hello Hello</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >Hey! </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >I am Good, How are you? Thank you for asking. </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello there</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >How are you?</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.message} >
                    <Text style={styles.messageText} >Hello Hello Hello Hello Hello Hello</Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >Hey! </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
                <View style={styles.messageRight} >
                    <Text style={styles.messageText} >I am Good, How are you? Thank you for asking. </Text>
                    <Text style={styles.date} >12/03/2023</Text>
                </View>
            </View>
        </ScrollView> 
        <View style={styles.footer}>
         <TextInput style={styles.input} placeholder="What's on your mind..." placeholderTextColor='#fff' />
         <TouchableOpacity style={styles.send} >
            <Image style={[Style.icon, { marginLeft : 5 }]} source={require('../assert/icons/send-message.png')} />
         </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
    bg:{
        backgroundColor: colors.primary,
        flex : 1,
        justifyContent : 'space-between'
    },
    header : {
        height : 60,
        backgroundColor : colors.secondry,
        paddingHorizontal : 10,
        paddingVertical : 5,
        flexDirection : 'row',
        gap : 10,
    },
    footer : {
        height : 60,
        paddingHorizontal : 10,
        paddingVertical : 5,
        flexDirection : 'row',
        gap : 10,
        width : '100%',
        justifyContent :"space-between"
    },
    input:{
        backgroundColor : colors.dark,
        width : 'auto',
        borderRadius : 25,
        paddingHorizontal : 10,
        fontSize  :18,
        color : '#fff',
        flexGrow : 1
    },
    send: {
        backgroundColor : colors.secondry,
        borderRadius  : 100,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    content : {
        flex : 1,
        padding : 8,
        alignContent : 'center',
        justifyContent :"center",
        gap: 4
    },
    message:{
        backgroundColor : colors.secondry,
        padding : 5,
        borderRadius : 3,
        alignSelf :'flex-start',
        maxWidth : '85%',
        // shadowColor : '#ff0000',
        // shadowOffset : {width : 30, height : 30},
        // shadowOpacity: 1,
        // shadowRadius : 10,
        position :'relative',
        paddingBottom : 15,
        paddingRight : 10,
        minWidth : 100
    },
    messageRight:{
        backgroundColor : '#262742' ,
        padding : 3,
        borderRadius : 3,
        alignSelf :'flex-end',
        maxWidth : '85%',
        // shadowColor : '#ff0000',
        // shadowOffset : {width : 30, height : 30},
        // shadowOpacity: 1,
        // shadowRadius : 10,
        position :'relative',
        paddingBottom : 15,
        paddingRight : 10,
        minWidth : 100
    },
    messageText :{
        fontSize : 18,
        color : "#fff",
    },
    date :{
        fontSize : 12,
        color : "#e5e5e5",
        position :'absolute',
        bottom : 0,
        right : 0

    }
})