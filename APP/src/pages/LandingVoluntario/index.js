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
        Picker,ScrollView,
        
    TextInput,Button } from 'react-native';

import * as Font from 'expo-font';
import styles from './styles';

import landingImg from '../../assets/icon.png';
import DashBoard from '../../assets/dashboard.png';
import Estoque from '../../assets/book.png';
import revista from '../../assets/kisspng-computer-icons-magazine-share-icon-clip-art-5b3bda4b5f5f68.8338598215306491633907.png';
import Renovações from '../../assets/return.png';
import Sair from '../../assets/registradora.png';
import Visitantes from '../../assets/userblack.png';


export default function LandingVoluntario( {navigation}){

    function dashboard(){
        navigation.navigate("DashBoard");
    }

    function estoque(){
       navigation.navigate("Estoque");
    }

    function emprestimo(){
      navigation.navigate("EmprestimoRevista");
   }

   function renovacoes(){
    navigation.navigate("Emprestimos");
 }

 function visitantes(){
  navigation.navigate("Visitantes");
}

function sair(){
  navigation.navigate("LandingFinanceiro");


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
        Seja Bem-Vindo, Voluntário !{'\n'}
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

          <Text style={styles.buttonText}>Acervo de Livros</Text>
        </TouchableOpacity>

        
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={emprestimo}

        >
            <Image style={styles.imgdashboard} source={revista} />
          <Text style={styles.buttonText}>Empréstimo de Revista</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={renovacoes}
        >
            <Image source={Renovações} style={styles.imgdashboard} />

          <Text style={styles.buttonText}>Renovações/Devoluções</Text>
        </TouchableOpacity>

        
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={visitantes}

        >
            <Image style={styles.imgdashboard} source={Visitantes} />
          <Text style={styles.buttonText}>Visitantes</Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={sair}

        >
            <Image style={styles.imgdashboard} source={Sair} />
          <Text style={styles.buttonText}>Financeiro</Text>
        </TouchableOpacity>

        
      </View>


     <TouchableOpacity
     style={styles.sairbutton}
     onPress={logout}
     >
      <Text style={styles.totalConnections2}>
        Sair do APP
      </Text>
      </TouchableOpacity>

      <Text style={styles.totalConnections}>
        Desenvolvido por APTechs{'\n'}
        Versão 1.4
      </Text>
     </ScrollView>
    </View>
   
  );
}

