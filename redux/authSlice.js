import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  isLoggin : false,
  list : [],
  movieList : [1,2,3],
  token : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODNhYzU5ZjQzZDBhYWY1MmVmMzYxMWNkYzQ5YjM1YiIsInN1YiI6IjYyZWExMTUyODU2NmQyMDA1YTQ3ZjlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WgWZMV5pbZup0Shq0AiJ15hXXdmNVV_Jh0x6z2yJuI8",

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: function(state,actions) {
         state.list.push(actions.payload);
    },
    login : function(state,actions){
        const checkEmail = state.list.find(function(data){
            return data.email === actions.payload.email
        });
        const checkPass = state.list.find(function(data){
            return data.password === actions.payload.password
        });
        if (checkEmail && checkPass){
            state.isLoggin = true;
        }
        else {
            state.isLoggin = false;
        }
    },
    logout : function(state){
        state.isLoggin = false;
    },
    movie : function(state,actions){
      state.movieList = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { register,login,logout,movie } = authSlice.actions

export default authSlice.reducer