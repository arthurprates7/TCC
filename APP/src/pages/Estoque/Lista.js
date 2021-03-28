
import React, { useState, useEffect } from 'react';
import {

    View,
    Text,
    Image,Alert

} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../api';

const Lista = props =>{


    async function detail( idProduto,disponibilidade ){

        
        
        if(idProduto.length === 0){

            alert('Erro', 'Ocorreu um erro desconhecido');
            return;

        }
        if(disponibilidade == 1){

            alert('Você não pode emprestar um livro que já se encontra emprestado!');
            return;

        }

        await api.get(`/src/all/produto/${idProduto}`)
        .then(async function(response){

            const produto = response.data;

            if(produto){

                props.navigation.navigate('SelecionaProduto', {
                    produto
                });

            }
                        
        })
        .catch(function(error){
        
            try{
            
                let message = typeof 
                error.response.data.message !== "undefined" ? 
                error.response.data.message : 
                "Houve uma falha ao tentar processar a requisição";
                alert("Erro", message);
            
            }catch(err){
                
                alert("Ocorreu um erro ao tentar processar a requisição!");
            
            }
        
        });


  }

    function Disponibilidade(){
      if(props.data.estado == 1){
          return <Text style={styles.textobloco}>Emprestado</Text>;
      }else{
        return <Text style={styles.textobloco}>Disponível</Text>;
      }
    }

    return(

        <TouchableOpacity 
        
            onPress={

                ()=>{
                   detail(props.data.id,props.data.estado);

                }

            }

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
           

           
               
                
        </TouchableOpacity>
    )

}

export default Lista;