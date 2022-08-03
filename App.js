import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput, TouchableHighlight} from 'react-native';
import { store,persistor } from './redux/store'
import { useSelector, useDispatch,Provider } from 'react-redux'
import { register,login, logout } from './redux/authSlice';
import { NativeRouter, Route, Link,Routes,useNavigate } from "react-router-native";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'redux-mock-store'
import Home from './Home';
import Register from './Register';
import Login from './Login';

export default function App() {
  const isLoggin = useSelector(function(state){
    return state.auth.isLoggin;
  })
  console.log(isLoggin);
  const dispatch = useDispatch();
  function logOut(){
    dispatch(logout());
  }
  return (
      <NativeRouter>
    <View  >
    <View style={{ display : "flex",flexDirection:"row" ,justifyContent:"center",marginTop:10}} >
    <Link to="/">
      <Text>Home</Text>
      </Link>
      {!isLoggin ?  
      <Link to="/register">
      <Text style={{ marginLeft:10 }}>Register/Login</Text>
      </Link> 
      :
      <View>
        <Text onPress={logOut} style={{ marginLeft:10 }}>LogOut</Text>
      </View>
      }
    </View>
      <Routes>
      <Route path="/register" element={<Register/>} component={Register} />
      <Route path="/login" element={<Login/>} component={Login} />
      <Route exact path="/" element={<Home/>} component={Home} />
      </Routes>
    </View>
  </NativeRouter>
  );
}
