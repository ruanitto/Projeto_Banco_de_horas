import React from 'react';
import { View,Text ,StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import Timer from './timer';


export default function Home() {
  const {navigate } = useNavigation();  

  
  function handleNewAppointment(){
      navigate('NewAppointment')
     
  }
  function handleHistAppointment(){
    navigate('ListAppointment')
  }
  return (
   <View style={styles.container}>
               
        <Text style={styles.tittle}> Bem vindo, Guilherme!</Text>
          <Timer/>
         <TouchableOpacity 
         style={styles.button} 
         onPress={handleNewAppointment}>
           <Text style={styles.buttonText}>Bater Ponto</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button2} onPress={handleHistAppointment}>
           <Text style={styles.buttonText}>Histórico</Text>
         </TouchableOpacity>

         
         
          
       
       
       </View>
  );
}


const styles = StyleSheet.create({
    container:{
      paddingHorizontal:16,
      paddingVertical:24,
      flex:1,
      
    },
    title:{
      fontSize: 48,
      fontWeight: 'bold',
      marginBottom:128
    },
    button:{
      width:'100%',
      backgroundColor:'#009CFF',
      height:54,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:24,
      borderRadius:8
    },
    button2:{
      width:'100%',
      backgroundColor:'red',
      height:54,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:24,
      borderRadius:8
    },
    buttonText:{
      fontSize:24,
      color:'#FFF'
    }
})