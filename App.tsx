import React from 'react';
import {useFonts, KleeOne_400Regular, KleeOne_600SemiBold } from '@expo-google-fonts/klee-one';
import AppLoading from 'expo-app-loading';
import { View, Text, Image } from 'react-native';
import  Inicio  from './src/pages/Inicio';
import Login from './src/pages/Login';
import styled from 'styled-components/native';




export default function App() {
  let [fontsLoaded, error]= useFonts({KleeOne_400Regular, KleeOne_600SemiBold})
  if (!fontsLoaded){
    return <AppLoading />
    
  } 

return (
      <>
        < Login/>
      
      </>
    
    
  );  
  
}







