// import React, {useState} from 'react';
// import {View, Text , Alert, TextInput,Button, StyleSheet,Image} from 'react-native';
// import Logo from '../assests/images/images.png';
// import HomeScreen from './home'

// const Login = () => {

//     const [email , setemail] = useState("");
//     const [password , setpassword ]= useState("");

//     const vaildemail=(email)=>{
//         const emailregex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return emailregex.test(String(email).toLowerCase());
//     }

//     const vaildpassword = (password) => {
//         return password.length >= 6;
//     }

//     const loginPress = () =>{
//         if(!vaildemail(email)){
//             Alert.alert("vaild email wrong mail");
//         }
//         if(!vaildpassword(password)){
//             Alert.alert('Invalid Password', 'Password should be at least 6 characters long');
//         }

//         // Alert.alert('Login Successful', 'You have logged in successfully');

//         if(vaildemail(email) || vaildpassword(password)){
//             Alert.alert("Fill Input")
//         }
//     }

//     return (
//         <>
//           <View style={{flex:1,justifyContent:'center'}}>
//             <Image source={Logo} style={{alignItems:'center',marginLeft:100}}/>
//              <Text style={styles.label}>Email </Text>
//              <TextInput  value={email} placeholder='Email' onChangeText={setemail} />
//              <Text  style={styles.label}>Password</Text>
//              <TextInput  value={password} placeholder='Password' onChangeText={setpassword} />
//              <Button title="Login" onPress={loginPress}/>
             
//           </View>
//         </>
//     )
// };
// const styles = StyleSheet.create({
//     input:{
//     backgroundColor: "#1cc0e73b",
//     margin: 20,
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 10,
//     paddingHorizontal: 8,
//     fontSize:20,
//     },
//     label:{
//         margin:10,
//         fontSize:20,
//     }
// });

// export default Login;


import React from "react";
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Image source={require('../assests/images/waveup.png')} style={styles.waveLogo}/>
        </View>
        <View>
          {/* <Text style={styles.heading}>Welcome to QWERTY</Text> */}
        </View>
        <View style={{ borderBottomColor: '#4776db', borderBottomWidth: 5, width: '50%', alignItems: 'center', margin: 'auto' }}>
          <Text style={styles.Loginlogo}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="user" style={styles.inputIcon} />
          <TextInput placeholder="user Id / email" style={styles.userTextinput} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput placeholder="Password" style={styles.userTextinput} secureTextEntry={true} />
        </View>
        <View style={styles.forgetpsdbox}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate('FoodSearh')}>
          <Text style={styles.loginBtntxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="google-plus" style={styles.googleIcon} />
          <Text style={styles.sociallogin}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="facebook-official" style={styles.facebookIcon} />
          <Text style={styles.sociallogin}>Login with Facebook</Text>
        </TouchableOpacity>
        <View>
          <Image source={require('../assests/images/downWave.png')} style={styles.downWave} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  waveLogo: {
    width: '100%',
    height: 180,
  },
  heading: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f78da7',
  },
  Loginlogo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4776db',
    textAlign: 'center',
    letterSpacing: 2,
    paddingBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    margin: 'auto',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  inputIcon: {
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  userTextinput: {
    fontSize: 18,
    flex: 1,
  },
  forgetpsdbox: {
    width: '80%',
    margin: 'auto',
    marginTop: 10,
  },
  forgetPassword: {
    textAlign: 'right',
    marginRight: 15,
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: '#f78da7',
    width: '55%',
    margin: 'auto',
    marginTop: 20,
    borderRadius: 30,
  },
  loginBtntxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    padding: 15,
    borderRadius: 100,
  },
  socialBtn: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '75%',
    margin: 'auto',
    marginTop: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 20,
  },
  googleIcon: {
    color: 'red',
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  facebookIcon: {
    color: 'blue',
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sociallogin: {
    fontSize: 18,
    color: 'gray',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  downWave: {
    width: '100%',
    height: 100,
  },
});

export default Login;
