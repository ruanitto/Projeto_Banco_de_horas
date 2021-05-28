import React,{useState,useEffect} from 'react'
import {
    StyleSheet,
    View, 
    KeyboardAvoidingView, 
    Image, 
    TouchableOpacity, 
    TextInput,
    Text,
    Animated,
    Keyboard,
    Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

let  user = {
    email:'guilhermer30@gmail.com',
    senha:'1234',
    name:'Guilherme'
}


export default function Login({navigation, route}){

    const[offset] = useState(new Animated.ValueXY({x:0,y:80}));
    const[opacity] = useState(new Animated.Value(0));
    const[logo] = useState(new Animated.ValueXY({x:130, y:155}) );
   
    const[email,setEmail] = useState('');
    const[senha,setSenha]= useState('');
     

  function Acess(){
      if(email === '' || senha === ''){
        Alert.alert('Há campos vázios')
      }else if(email !== user.email || senha !== user.senha){
        Alert.alert('Email ou Senha invalidos!')       
        
      }else{
      
       Alert.alert('Logado com sucesso!')
       navigation.navigate('Home')
      }
  }

    useEffect(()=>{
       
        
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow)
       keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide)
        Animated.parallel([
            Animated.spring(offset.y,{
                toValue:0,
                speed:4,
                bounciness:20
            }),
            Animated.timing(opacity,{
                toValue: 1 ,
                duration:200,
            })
        ]).start()              
    },[])

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue:110,
                duration:100,

            }),
            Animated.timing(logo.y,{
                toValue:130,
                duration:100,

            })
        ]).start();
    }
    function keyboardDidHide(){
       Animated.parallel([
        Animated.timing(logo.x,{
            toValue:150,
            duration:200,

        }),
        Animated.timing(logo.y,{
            toValue:170,
            duration:200,

        })
       ]).start();
       
    }



    return(
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
       
            <Animated.Image 
            style={{
                width:logo.x,
                height:logo.y
            }}
            source={require('/Mobile/inDay/assets/logo.png')}
            
            />
        </View>
        
        <Animated.View     
        style={[
            styles.container,
            {
                opacity:opacity,
                transform:[
                   {translateY: offset.y}
               ] 
            }
            ]}>
            
            <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            value={email}
            onChangeText={text=> setEmail(text)}
            
            />
           
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            value={senha}
            onChangeText={text=>setSenha(text)}
            secureTextEntry
            />
      
            <TouchableOpacity style={styles.btnSubmit} onPress={Acess}>
                <Text style={styles.submitText} >Acessar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnRegister}  >
                <Text style={styles.registerText}
                title='registro'
                onPress={()=> navigation.navigate('Register')}
                >Criar conta gratuita
                </Text>
            </TouchableOpacity>
        
        </Animated.View>

    </KeyboardAvoidingView>

    )
}

const  styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FFF',
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',

    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50
    },
    input:{
        
        marginBottom:15,
        color:'#222',
        fontSize: 17,
        borderRadius:8,
        padding:10,
        width:'90%',
        borderWidth:1
    },
    btnSubmit:{
        backgroundColor:'#35AAFF',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        
    },
    submitText:{
       color:'#FFF',
       fontSize:18,
       fontWeight:'bold',
    },
    btnRegister: {
        marginTop: 10,
        
    },
    registerText:{
        color:'#191919',
    }
})