import React,{useState, useRef,useEffect} from 'react';
import { View, SafeAreaView,Text,Image,KeyboardAvoidingView, TextInput, TouchableOpacity,FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import styles from './styles';
import api from '../../../api';

export default function Erro({navigation}){
  const btnSubmit  = useRef(null);

   function submit(){

      navigation.navigate('DashBoard');
  }

    return (
       
      <SafeAreaView style={styles.container}>
            
        <Header 
            navigation={navigation}
        />

      <View style={styles.bloco}>
          <Image style={styles.imgcheck} source={require('../../assets/erro.png')}></Image>
          <Text style={styles.textdashboard}>Falha ao Processar a Requisição!</Text>

      </View>

      <View
         style={styles.background}
      >

      <TouchableOpacity 
          onPress={submit} 
          style={styles.buttonSubmit}
          ref={btnSubmit}
      >
          <Text style={styles.submitText}>Voltar</Text>

      </TouchableOpacity>

      </View>
     

  </SafeAreaView>
            
            
  );
}

