import React,{useState,useEffect} from 'react';
import { StyleSheet } from 'react-native';

import {NavigationContainer }from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Carrosel from './src/pages/Carrosel';
import Login from './src/pages/Log';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import ListAppointment from './src/pages/ListAppointment';

import NewAppointment from './src/pages/NewAppointment'
import useAuth from '../inDay/src/pages/hooks/useAuth';
import {AuthProvider} from './src/pages/context/auth'

const Stack = createStackNavigator();

export default function App() {
  
    return (
      
  <NavigationContainer>
      <Stack.Navigator style={styles.text}>

     
          <Stack.Screen name='Carrosel'component={Carrosel}options={{  title:'Bem vindo'}}/>
          <Stack.Screen name='Login' component={Login}/>
        
          <Stack.Screen name='Register'options={{title:'Crie Sua Conta'}}component={Register}/>
        <Stack.Screen name='Home'component={Home}/>
       <Stack.Screen name = 'NewAppointment' component={NewAppointment}/>
       <Stack.Screen name = 'ListAppointment' component={ListAppointment}/>
     

      </Stack.Navigator>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  text:{
    
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    paddingTop: '50%',
    fontWeight: 'bold',
  }
})
