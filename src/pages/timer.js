import React, {useState ,useEffect}  from 'react';

import { View,Text ,StyleSheet} from 'react-native';

export default function Timer(props) {
    const[hour,setHour]= useState('')
    const[minutes,setMinutes]=useState('')
   
    useEffect(()=>{
        setInterval(()=>{
            setHour(`${new Date().getHours()}`)
            setMinutes(`${new Date().getMinutes()}`)
        }),1000
    },[])

    
 
   return (
   <View style = {styles.container}>
       <View style={styles.boxNumber}>
            <Text style = {styles.number}>{hour}</Text>           
       </View>
         
          <Text style = {styles.point}>:</Text>
       
       <View style={styles.boxNumber}>
            <Text style = {styles.number}>{+minutes < 10 ? `0${minutes}`: minutes}</Text>
       </View>
       
       

   </View>
  );
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxNumber:{
        flex:1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#eee',
        borderRadius:4

    },
    number:{
        fontSize:128
    },
    point:{
        fontSize:128,
    }

})