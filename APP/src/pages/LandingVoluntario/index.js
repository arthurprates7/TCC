import React from 'react';
import {    
        AsyncStorage, 
        Image,  
        Text,    
        TouchableOpacity,  
        View,
        ScrollView,    
    } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/logo2.png';
import DashBoard from '../../assets/dashboard.png';
import Estoque from '../../assets/funnel-dollar-solid.png';
import Sair from '../../assets/Minio_Devices_and_Hardware_Bold-90-512.png';


export default function LandingVoluntario( {navigation}){

    function dashboard(){
        navigation.navigate("DashBoard");
    }

    function estoque(){
       navigation.navigate("Estoque");
    }

    function logout(){
      AsyncStorage.clear();
      navigation.navigate("LandingAcervo");

    }

  return (

    
    <View style={styles.container}>

        <Image source={landingImg} style={styles.banner} />
        <ScrollView>
      <Text style={styles.title}>
        Seja Bem-Vindo, Arthur !{'\n'}
        <Text style={styles.titleBold}>O que você deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={dashboard}

        >
            <Image style={styles.imgdashboard} source={DashBoard} />
          <Text style={styles.buttonText}>DashBoard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={estoque}
        >
            <Image source={Estoque} style={styles.imgdashboard} />

          <Text style={styles.buttonText}>Controle Mensal</Text>
        </TouchableOpacity>

        
      </View>

    

      <View style={styles.buttonsContainer}>
      

        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={logout}

        >
            <Image style={styles.imgdashboard} source={Sair} />
          <Text style={styles.buttonText}>Sair do APP</Text>
        </TouchableOpacity>

        
      </View>


    

      <Text style={styles.totalConnections}>
        Desenvolvido por Arthur Martins Prates{'\n'}
        Versão 1.0
      </Text>
     </ScrollView>
    </View>
   
  );
}

