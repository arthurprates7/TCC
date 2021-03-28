import React from 'react';
import {    
        Image,  
        Text,    
        TouchableOpacity,  
        View,
       } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/logo2.png';
import DashBoard from '../../assets/user.png';
import Estoque from '../../assets/exclamation.png';


export default function Landingacervo( {navigation}){

    function home(){
        navigation.navigate("Acervo");
    }

  
    function acervo(){
       navigation.navigate("Home");
    }


  return (
    <View style={styles.container}>

        <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem-Vindo!  {'\n'}
        <Text style={styles.titleBold}>O que você deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={acervo}

        >
            <Image style={styles.imgdashboard} source={DashBoard} />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={home}
        >
            <Image source={Estoque} style={styles.imgdashboard} />

          <Text style={styles.buttonText}>Sobre o APP</Text>
        </TouchableOpacity>

        
      </View>



      


      <Text style={styles.totalConnections}>
        Desenvolvido por Arthur Martins Prates{'\n'}
        Versão 1.0
      </Text>
     
    </View>
  );
}

