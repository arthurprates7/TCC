
import React, { useState, useEffect } from 'react';
import {

    View,
    Text,
    Image

} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lista = props =>{
      

    return(

        <View 
        
            onPress={

                ()=>{
                    
                    props.setProduto({});
                    props.detail(props.data.id)

                }

            }

            style={styles.bloco}
        >    

           

            <View style={styles.viewTexto}>
                <Text style={styles.textobloco}>{props.data.codigo} - {props.data.nome_visitante}</Text>
                <Text style={styles.textobloco}>Email: {props.data.email}</Text>
                <Text style={styles.textobloco}>DT/Nasc: {props.data.datanascimento}</Text>
                <Text style={styles.textobloco}>Telefone: {props.data.telefone} - Endereço: {props.data.endereco}</Text>
                <Text style={styles.textobloco}>Como Ficou Sabendo? {props.data.informacao}</Text>
                

            </View>
               
                
        </View>
    )

}

export default Lista;