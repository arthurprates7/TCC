import React from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './styles';

const Header = (props)=>{

    const {navigation} = props;


    async function teste(){

      
      const token = await AsyncStorage.getItem("@ProjetoCasa:usuario:token");
        
      if(token)
        navigation.navigate('LandingVoluntario');
        else
        navigation.navigate('LandingAcervo');

    }

  return (

    <View style={styles.header} >

        <View style={styles.containerHeader}>


            <TouchableOpacity onPress={teste}>
            <Image style={styles.logomarca1} source={require('../../../assets/pngegg.png')} />
            </TouchableOpacity>

            <Image style={styles.logomarca} source={require('../../../assets/icon.png')} />
            

        </View>

        <View style={styles.yellow}></View>                    
        
    </View>

  );
}

export default Header;