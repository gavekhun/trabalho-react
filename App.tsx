import React from 'react';
import {useFonts, KleeOne_400Regular, KleeOne_600SemiBold } from '@expo-google-fonts/klee-one';
import AppLoading from 'expo-app-loading';
import Router from './src/pages/Router/router';




export default function App() {
  let [fontsLoaded, error]= useFonts({KleeOne_400Regular, KleeOne_600SemiBold})
  if (!fontsLoaded){
    return <AppLoading />
    
  } 

return (
      <>
        < Router/>
      
      </>
    
    
  );  
  
}







