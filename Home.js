import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput, TouchableHighlight,Image} from 'react-native';
import { store,persistor } from './redux/store'
import { useSelector, useDispatch,Provider } from 'react-redux'
import { register,login,movie } from './redux/authSlice';
import { NativeRouter, Route, Link,Routes,useNavigate } from "react-router-native";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'redux-mock-store'
import axios from "axios"
export default function Home (){
    const isLoggin = useSelector(function(state){
      return state.auth.isLoggin;
    })
    const movieList = useSelector(function(state){
      return state.auth.movieList;
    })
    const token = useSelector(function(state){
      return state.auth.token;
    })
    const navigate = useNavigate();
    useEffect(function(){
      if (!isLoggin){
        navigate("/register");
      }
    },[isLoggin])
    const dispatch = useDispatch();
    useEffect(function(){
      axios.get("https://api.themoviedb.org/3/movie/550?api_key=c83ac59f43d0aaf52ef3611cdc49b35b",{
        headers:{
          Authorization : "Bearer " + token
        }
      }).then(function(res){
        console.log(res.data.production_companies);
        dispatch(movie(res.data.production_companies))
      }).catch(function(error){
        console.log(error);
      })
    },[])
    console.log("movieList",movieList)
    return (
      <View style={{ display:"flex",alignItems:"center" }}>
        <Text style={{ fontWeight:"bold" }}>Movie Apps API</Text>
        {movieList.map(function(data){
          return (
            <View style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",border : "1px solid grey",width : 200,textAlign : "center",padding : 8 ,margin : 10}}>
              <Text>ID : {data.id}</Text>
              <Text>Name : {data.name}</Text>
              <Text>Origin Country : {data.origin_country}</Text>
            </View>
          )
        })}
      </View>
    )
  }