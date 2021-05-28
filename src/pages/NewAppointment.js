import React,{ useState, useEffect } from 'react';
import {Text,View, StyleSheet,  Button, Alert  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useNavigation} from '@react-navigation/core';



export default function NewAppointment() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {navigate } = useNavigation();  

    useEffect(() => {
     handlePermission()
    }, []);
    async function handlePermission(){
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }

    if (hasPermission === null) {
      return <Text>Permissão da camera requerida.</Text>;
    }
    if (hasPermission === false) {
      return <Text>Sem acesso a camera.</Text>;
    }
    
    const handleBarCodeScanned = ({ data }) => {
      setScanned(true)
      Alert.alert('Bateu ponto',`Seu horário foi computado... ${new Date().getHours()}:${new Date().getMinutes()}`)
      
       
    };
  
    

     return( 
      <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Escanear novamente'} onPress={() => setScanned(false)}/>}
    </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});