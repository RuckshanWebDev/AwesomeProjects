import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Style, { colors } from '../css';
import {  useState } from 'react';
import { useLoginUserMutation } from '../features/userApi';
import { showMessage } from "react-native-flash-message";
import { getData, storeData } from '../utils/AsyncStorage'
import { useDispatch } from 'react-redux';
import { authToggle, setToken } from '../features/localSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const [loginFn,loginData] = useLoginUserMutation()
  const dispatch = useDispatch()

  AsyncStorage.getItem('token').then((val)=> {
    if(val)dispatch(setToken(val))
    }).catch((e)=> console.log(e) )
  
    console.log(loginData);
  const formHandler = async()=>{
    try {
      if(!email || !password){
        showMessage({
          message: "Enter the Valid Credentials",
          type: "warning",
        }); 
      }else{
        const response = await loginFn({email, password}).unwrap()
        console.log(response.data.token); 
        storeData('token', response.data.token )
        dispatch(setToken(response.data.token))
      }
    } catch (error) {
      console.log(error);
      showMessage({
        message: "Login Failed",
        description: "Invalid Email or Password",
        type: "danger",
      });    
    }
  }


  return (
    <View style={style.container}>
    <View style={[Style.bg, { justifyContent : 'center', padding : 10}]}>
      <Image
        resizeMode="cover"
        style={style.logo}
        source={require('../assert/logo.gif')}
      />
      <View>
        <TextInput
          style={Style.input}
          underlineColorAndroid="#f000"
          placeholder="Email"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={newText => setEmail(newText)}
        />
        <TextInput
          style={Style.input}
          underlineColorAndroid="#f000"
          placeholder="Password"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={newText => setPassword(newText)}
        />
      </View>
      <View >
        { !loginData.isLoading ? <Button color={colors.dark} onPress={formHandler} style={Style.btn} title="Login" /> :
        <ActivityIndicator color={"#fff"} />}
      </View>
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('Register') } ><Text style={[Style.p, style.bottomText, { textAlign : 'center', marginTop : 'auto', padding : 30}]} >New to Appropriate Wolrd? <Text style={{ textDecorationLine : 'underline' }} > Register</Text></Text></TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    color: '#fff',
   
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
    // marginTop : '10%',
    alignSelf: 'center',
  },
});
