import React, {useEffect, useState,useRef} from 'react';
import {    
        Alert,
        AsyncStorage, 
        FlatList,
        Image,  
        Text,    
        TouchableOpacity,  
        SafeAreaView,    
        View,
        Picker,
    TextInput,Button } from 'react-native';

import * as Font from 'expo-font';
import styles from './styles';

import landingImg from '../../assets/icon.png';
import DashBoard from '../../assets/book.png';
import Estoque from '../../assets/voluntario.png';


export default function Landingacervo( {navigation}){

    function home(){
        navigation.navigate("Home");
    }

  
    function acervo(){
       navigation.navigate("Acervo");
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
          <Text style={styles.buttonText}>Acervo de Livros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={home}
        >
            <Image source={Estoque} style={styles.imgdashboard} />

          <Text style={styles.buttonText}>Acesso Voluntários</Text>
        </TouchableOpacity>

        
      </View>


      <Text style={styles.totalConnections}>
        Desenvolvido por APTechs{'\n'}
        Versão 1.4
      </Text>
     
    </View>
  );
}

