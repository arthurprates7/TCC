
import React, { useState, useEffect } from 'react';
import {

    View,
    Text,
    Image

} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lista = props =>{
      
   
    
    function Disponibilidade(){
        if(props.data.estado == 1){
            return <Text style={styles.textobloco}>Emprestado</Text>;
        }else{
          return <Text style={styles.textobloco}>Disponível</Text>;
        }
      }

    return(

        <View 
        
       

        style={styles.bloco}
    >    

       
            
        <View style={styles.viewTexto}>
            <View style={styles.viewImagem}>
            <Image style={styles.imgcheck} source={{uri:props.data.image}}></Image>
            </View>
            <Text style={styles.textobloco}>{props.data.codigo}</Text>
            <Text style={styles.textobloco}>{props.data.nome}</Text>
            <Text style={styles.textobloco}>Autor: {props.data.autor} </Text>
            <Text style={styles.textobloco}>Gênero: {props.data.genero}</Text>
            <Text style={styles.textobloco}>Coleção: {props.data.colecao} - Edição: {props.data.edicao}</Text>
            <Text style={styles.textobloco}>Disponibilidade: <Disponibilidade></Disponibilidade> </Text>


        </View>
       

       
           
            
    </View>

    )

}

export default Lista;