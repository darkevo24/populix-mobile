import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput, TouchableHighlight} from 'react-native';
import { store,persistor } from './redux/store'
import { useSelector, useDispatch,Provider } from 'react-redux'
import { register,login } from './redux/authSlice';
import { NativeRouter, Route, Link,Routes,useNavigate } from "react-router-native";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'redux-mock-store'

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notif = function(){
      if (email == "" || pass == ""){
        alert("Email or password needs to be filled");
      }
      else {
        dispatch(register({
          email : email,
          password : pass
        }))
        navigate("/login");
      }
      
    }
    return (
      <View style={{ padding:20 }}>
        <Text>Email : </Text>
        <TextInput style={{     	
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          placeholderTextColor: 'gray',
          marginTop:10,
          paddingLeft:5,
          paddingRight:5,
          paddingTop:2,
          paddingBottom:2
        }} 
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="input your email here..."
      ></TextInput>
            <Text style={{ marginTop : 10 }}>Password : </Text>
        <TextInput style={{     	
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          placeholderTextColor: 'gray',
          marginTop:10,
          paddingLeft:5,
          paddingRight:5,
          paddingTop:2,
          paddingBottom:2
        }} 
          onChangeText={text => setPass(text)}
          value={pass}
          placeholder="input your password here..."
      ></TextInput>
      <View style={{ marginTop : 10 }}></View>
      <Button onPress={notif} title='Register'></Button>
      </View>
    );
  }