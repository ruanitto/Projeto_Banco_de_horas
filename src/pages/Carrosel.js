import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
  {
    key:'1',
    title:'Bem vindo ao inDay!',
    text:'Este é inDay , seu novo aplicativo de controle de horas em sua empresa.',
    image:require('/Mobile/inDay/src/assets/1.png')
  },
  {
    key:'2',
    title:'Para que serve?',
    text:'Neste aplicativo fácil e prático, você conseguirá ter um controle de suas horas, e sua empresa também terá acesso a essas informações!',
    image:require('/Mobile/inDay/src/assets/2.png')
  },
  {
    key:'3',
    title:'Já pode Logar!',
    text:'Acesse sua conta e comece a gerenciar suas horas e mostrar a sua empresa que está trabalhando!',
    image:require('/Mobile/inDay/src/assets/3.png')
  },
];


export default function Carrosel({navigation}) {
  
 function renderSlides({item}){
  return(
    <View style={ {flex:1}}>
      <Image
      source={item.image}
      style={{
        resizeMode:'cover',
        height:'65%',
        width:'100%',
      }}
      />
      <Text
      style={{
        paddingTop: 25,
        paddingBottom: 10,
        fontSize:23,
        fontWeight:'bold',
        color:'#009CFF',
        alignItems: 'center',
        marginLeft: 10
      }}>
        {item.title} 
      </Text>
      
      <Text
      style={{
        textAlign: 'center',
        color:'black',
        paddingHorizontal:15,
        fontSize:15
      }}
      >
        {item.text} 
      
      </Text>
    </View>
  )
 }
 
 
    return (
      <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor:'#009CFF',
        width:30
      }}
      renderDoneButton={()=>
      <Text style={{
        fontSize:20,
        color:'#009CFF',
        fontWeight:'bold'}}
        onPress={()=>navigation.navigate('Login')}
        >Acessar</Text>}
        
      onDone={()=> alert('ENTROU NA PAGINA INICIAL')}
      
      />
    );
  
  
}

