
import React, { useState, useEffect } from 'react';
import {

    View,
    Text,
    Image

} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lista = props =>{
    const [ produto, setProduto] = useState(null);

    async function renovacao(id,codigo_livro,nome_livro,codigo_visitante,data_emprestimo,nome_visitante,data_devolucao,dias_emprestimo){

        if(id.length === 0){

            Alert.alert('Erro', 'Ocorreu um erro desconhecido');
            return;

        }

        const array=[id,codigo_livro,nome_livro,codigo_visitante,data_emprestimo,nome_visitante,data_devolucao,dias_emprestimo];

       
        props.navigation.navigate('Renovacao', {
            id,codigo_livro,nome_livro,codigo_visitante,nome_visitante,data_devolucao,dias_emprestimo,data_emprestimo
        });

          

  }

  async function devolucao(id,codigo_livro,nome_livro,codigo_visitante,nome_visitante,data_devolucao,dias_emprestimo){

    if(id.length === 0){

        Alert.alert('Erro', 'Ocorreu um erro desconhecido');
        return;

    }
    const array=[id,codigo_livro,nome_livro,codigo_visitante,nome_visitante,data_devolucao,dias_emprestimo];


    props.navigation.navigate('Devolucao', {
        id,codigo_livro,nome_livro,codigo_visitante,nome_visitante,data_devolucao,dias_emprestimo
    });

    
}

 
function Emprestimo(){
    let date = props.data.data_emprestimo;
    let today = new Date(date);
    today.setDate(today.getDate()+1)
    let data_visualizar = ("0" + today.getDate()).slice(-2) + "/" + ("0" + (today.getMonth() + 1)).slice(-2) + "/" + today.getFullYear();

    return <Text style={styles.textobloco}>{data_visualizar}</Text>;
   
  }

   
function Devolucao(){
    let date = props.data.data_devolucao;
    let today = new Date(date);
    today.setDate(today.getDate()+1)

    let data_visualizar = ("0" + today.getDate()).slice(-2) + "/" + ("0" + (today.getMonth() + 1)).slice(-2) + "/" + today.getFullYear();

    return <Text style={styles.textobloco}>{data_visualizar}</Text>;
   
  }


    
      

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
                <Text style={styles.textobloco}>{props.data.codigo_livro}</Text>
                <Text style={styles.textobloco}>{props.data.nome_livro}</Text>
                <Text style={styles.textobloco}>Cód Visitante: {props.data.codigo_visitante}</Text>
                <Text style={styles.textobloco}>Visitante: {props.data.nome_visitante}</Text>
                <Text style={styles.textobloco}>Data Empréstimo: <Emprestimo></Emprestimo> </Text>
                <Text style={styles.textobloco}>Devolução: <Devolucao></Devolucao></Text>
                <Text style={styles.textobloco}>Dias Emprestado: {props.data.dias_emprestimo}</Text>


            </View>

            

                <TouchableOpacity 
                  style={styles.buttonSubmit1}
                  onPress={()=>{renovacao(props.data.id,props.data.codigo_livro,props.data.nome_livro,props.data.codigo_visitante,props.data.data_emprestimo,props.data.nome_visitante,props.data.data_devolucao,props.data.dias_emprestimo)}}
                 
                >
                 <Image style={styles.imgcheck1} source={require('../../assets/recycleicon.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonSubmit1}
                  onPress={()=>{devolucao(props.data.id,props.data.codigo_livro,props.data.nome_livro,props.data.codigo_visitante,props.data.nome_visitante,props.data.data_devolucao,props.data.dias_emprestimo)}}

                 
                >
                 <Image style={styles.imgcheck1} source={require('../../assets/devolucao.png')}></Image>
            </TouchableOpacity>
               
                
        </View>
    )

}

export default Lista;