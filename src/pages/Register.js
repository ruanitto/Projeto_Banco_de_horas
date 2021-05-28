import React,{useState}from 'react';
import {StyleSheet,Text,View,KeyboardAvoidingView, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}){
    const[email,setEmail] = useState('');
    const[senha,setSenha]= useState('');
    const[confirm,setConfirm] = useState('')
    
    
   
        async function validate(){
            if(email ==='' || senha === ''){
                Alert.alert('Preencha todos os campos!')
            }else if(senha !== confirm){ 
                Alert.alert('Senhas e Confirmação são diferentes')
                    
                
            }else{
                const user={email,senha}
                
                await AsyncStorage.setItem('1',JSON.stringify(user))
                Alert.alert('salvo',`email->${user.email}   senha-->${user.senha}`)
                navigation.navigate('Login')
               }
        
        }

        
    
  
   
    
 
  
   
    
    return(
        <KeyboardAvoidingView style={styles.Keyboard}>
            <View style={styles.container}>
               
               <Text style={styles.textinp}>Email:</Text>
              
               <TextInput
                autoCorrect={false}
                style={styles.input}
                placeholder='Seu melhor Email'
                onChangeText={text=>setEmail(text)}
               />
               
               <Text style={styles.textinp}>Senha:</Text>
              
               
                <TextInput
                autoCorrect={false}
                style={styles.input}
                placeholder='Sua senha'
                onChangeText={text=> setSenha(text)}
               />
               
               <Text style={styles.textinp}>Confirmação:</Text>
               
                <TextInput
                 autoCorrect={false}
                 style={styles.input}
                 placeholder='Confirme sua senha'
                 onChangeText={text=>setConfirm(text)}
               />
            
                <TouchableOpacity style={styles.btn} onPress={validate}>
                    <Text style={styles.btntext}>Cadastrar</Text>
                </TouchableOpacity>
                
            </View>
      
      
      
        </KeyboardAvoidingView>

    )
}

const styles= StyleSheet.create({
     Keyboard:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
   },
   container:{
    flex:1,
    width:'80%',
    justifyContent: 'center'/*ALINHAMENTO VERTICAL*/,
    alignItems: 'center',
    paddingBottom:40 ,
   },
    input:{
        width:"100%",
        marginBottom:15,
        padding:10,
        borderWidth:1,
        borderColor: 'black',
        borderRadius:8,
    },
    textinp:{
        textAlign: 'auto'
    },
    btn:{
        width:"100%",
        marginBottom:20,
        padding:10,
        borderRadius:8,
        backgroundColor:'#35AAFF'
    },
    btntext:{
        color:'#FFF',
        textAlign:'center', 
        fontSize:17,
        fontWeight:'bold'
    }
})