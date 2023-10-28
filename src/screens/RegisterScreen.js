import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Style, { colors } from '../css';
import { useRegisterUserMutation } from '../features/userApi'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const [registerFn, registerData ] = useRegisterUserMutation()

  const formHandler = async()=>{
    console.log(name);
    console.log(email);
    console.log(password);
    registerFn({name, email, password})
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
        placeholder="Name"
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
        onChangeText={newText => setName(newText) }
      />
      <TextInput
        style={Style.input}
        underlineColorAndroid="#f000"
        placeholder="Email"
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
        onChangeText={newText => setEmail(newText) }
      />
      <TextInput
        style={Style.input}
        underlineColorAndroid="#f000"
        placeholder="Password"
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
        onChangeText={newText => setPassword(newText) }
      />
      <Button color={colors.dark} style={Style.btn} title="Register" onPress={formHandler} />
      </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Login') } ><Text style={[Style.p, { textAlign : 'center', padding : 30 }]} >Already have a Account?<Text style={{ textDecorationLine : 'underline' }} > Login</Text></Text></TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    color: '#fff',
  },
  title: {
    color: '#f6f4fb',
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 10,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#651064',
    width: 300,
    height: 170,
    borderRadius: 15,
  },
  box2: {
    backgroundColor: '#651064',
    width: 300,
    height: 170,
    borderRadius: 15,
    marginLeft: 10,
    marginVertical: 30,
  },
  grid: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
});
