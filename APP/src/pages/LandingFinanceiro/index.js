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
import DashBoard from '../../assets/real.png';
import Estoque from '../../assets/devolucao.png';
import Back from '../../assets/back.png';


export default function LandingFinanceiro( {navigation}){

    function dashboard(){
        navigation.navigate("EntradaFinanceiro");
    }

    function estoque(){
       navigation.navigate("SaidaFinanceiro");
    }

    function back(){
      navigation.navigate("LandingVoluntario");

    }

   

  return (
    <View style={styles.container}>

        <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        <Text style={styles.titleBold}>O que você deseja fazer no Financeiro?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={dashboard}

        >
            <Image style={styles.imgdashboard} source={DashBoard} />
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={estoque}
        >
            <Image source={Estoque} style={styles.imgdashboard} />

          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>

        
      </View>


      <View style={styles.buttonsContainer}>
     

        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={back}

        >
            <Image style={styles.imgdashboard} source={Back} />
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

       

        
      </View>

      
      

      <Text style={styles.totalConnections}>
        Desenvolvido por APTechs
      </Text>
     
    </View>
  );
}

