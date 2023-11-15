import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#312880',
  secondry : '#6b6ed4',
  thursary : '#a5a7e9',
  // primary: '#1a0939',
  // secondry : '#53476b',
  dark: '#110428',
};

const Style = StyleSheet.create({
  model:{
    position : 'absolute',
    top : '40%',
    backgroundColor : '#fff',
    width : '80%',
    borderRadius : 15,
    zIndex : 10,
    alignSelf : 'center'
  },  
  modelBtn : {
    padding : 10
  },
  modelBtnText : {
    fontSize : 24,
    fontWeight: '600',
    color : '#000',
    padding : 10
  },
  bg: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    color: '#f6f4fb',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'sans',
  },
  h1: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '700',
    fontFamily: 'sans',
    lineHeight: 42,
  },
  h2: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    fontFamily: 'sans',
    lineHeight: 34,
  },
  h3: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '200',
    fontFamily: 'sans',
  },
  h4: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '200',
    fontFamily: 'sans',
  },
  h5: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '200',
    fontFamily: 'sans',
  },
  span:{
    color: '#f6f4fb',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'sans',
  },
  input: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
    marginBottom: 10,
    paddingVertical : 10
  },
  btn: {
    backgroundColor: '#ff0000',
    borderWidth: 0,
    color: '#FFFFFF',
    width: 10,
    margin: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  rowSb: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  icon : {
    width : 25,
    height : 25
},
  iconS : {
    width : 20,
    height : 20
},
  iconL : {
    width : 30,
    height : 30
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarProfile: {
    width: 150,
    height: 150,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
  },
  avatarProfileM :{
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
  } ,
  avatarProfileS :{
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 0,
    borderRadius: 100,
  } ,
  avatarProfileSm :{
    width: 40,
    height: 40,
    borderColor: '#fff',
    borderWidth: 0,
    borderRadius: 100,
  } ,
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  inputFullWidth : {
    borderColor : '#fff',
    color : "#fff",
    borderWidth: 2,
    padding : 10,
    borderRadius : 5,
    fontSize: 18
  }, 
  btn: {
    backgroundColor : colors.secondry,
    alignSelf: "flex-end",
    paddingHorizontal : 22,
    paddingVertical : 12,
    borderRadius : 5
  },
  btnText : {
    color : "#fff",
    fontSize : 22
  },
  mtS: {marginTop: 10},
  mtM: {marginTop: 30},
  mtL: {marginTop: 50},
  mbS: {marginBottom: 10},
  mbM: {marginBottom: 30},
  mbL: {marginBottom: 50},
  mlS: {marginLeft: 10},
  mlM: {marginLeft: 30},
  mlL: {marginLeft: 50},
  mrS: {marginRight: 10},
  mrM: {marginRight: 30},
  mrL: {marginRight: 50},
  ptS: {paddingTop: 10},
  ptM: {paddingTop: 30},
  ptL: {paddingTop: 50},
  pbS: {paddingBottom: 10},
  pbM: {paddingBottom: 40},
  pbL: {paddingBottom: 50},
});



export default Style;
