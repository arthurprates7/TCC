import React, {useEffect, useState,useRef} from 'react';
import {    
        Alert,
        AsyncStorage, 
        FlatList,
        Image,  
        Text,    
        TouchableOpacity,
        ScrollView,
        View,TextInput,KeyboardAvoidingView,Platform, ScrollViewComponent,Picker } from 'react-native';

import styles from './styles';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import api from '../../../api';

export default function SaidaFinanceiro({navigation}) {

    const [codigo_revista,setCodigoRevista] =useState('');
    const [nome_revista,setNomeRevista] =useState('');
    const [ codigo_visitante,setCodigoVisitante] = useState("US");
    const [ nome_visitante,setNomeVisitante] = useState('');
    const [dias_emprestimo, setSelectedValue] = useState('');
    const [data_devolucao, setDataDevolucao] = useState('');
    const [data_devolucao2, setDataDevolucao2] = useState('');
    const [data_emprestimo, setDataEmprestimo] = useState('');

    
    const [valor, setValor] = useState('');
    const [destino, setOrigem] = useState('');



  function voltar(){
        navigation.navigate('LandingFinanceiro');
  }
 

    

    let now = new Date;
    let created_at = ("0" + now.getDate()).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();
    const [data,setNewDate]=useState(created_at) ;
    


     const btnSubmit  = useRef(null);

     async function submit(){
        await api.post('/src/all/financeiro/saida',
        
        {destino,valor,data} 
    )
    .then(async function(response){

            navigation.navigate('ComprovantePedido');
    
    })
    .catch(function(error){
       
        try{
            
            let message = typeof 
            error.response.data.message !== "undefined" ? 
            error.response.data.message : 
            "Houve uma falha";
            Alert.alert("Erro", message);
            
        
        }catch(err){
            
            navigation.navigate('Erro');
           
        }
    
    });
    }



    return (

        <View style={{flex:1, justifyContent:"space-between"}}>
    
            <Header 
                navigation={navigation}
            />


            <ScrollView style={styles.containerScrollView}>
            
                <KeyboardAvoidingView 

                    style={styles.main} 
                    behavior={Platform.OS === 'ios' ? "padding" : ''}
                    enabled
                >
                
                    <Text style={styles.textdashboard}>Saída do Financeiro</Text>


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>{'\n'}</Text>
                        
                    </View>

                    


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Preencha abaixo a Data↓↓</Text>
                            <TextInput
                            style={styles.textInput}
                                placeholder="Preencha a data"
                                value={data}
                                onChangeText={(value)=>{setNewDate(value)}}
                                autoCorrect={false}
                                keyboardType={"default"}
                            />

                        <Text style={styles.textdashboard1}>Digite o Destino da Saída↓↓</Text>
                            <TextInput
                            style={styles.textInput}
                                placeholder="Digite o Destino da Saída"
                                value={destino}
                                onChangeText={(value)=>{setOrigem(value)}}
                                autoCorrect={false}
                                keyboardType={"default"}
                            />

                        <Text style={styles.textdashboard1}>Digite o Valor da Saída↓↓</Text>
                            <TextInput
                            style={styles.textInput}
                                placeholder="Digite o valor da Saída"
                                value={valor}
                                onChangeText={(value)=>{setValor(value)}}
                                autoCorrect={false}
                                keyboardType={"decimal-pad"}
                            />

                    </View>
                    
                        <TouchableOpacity 
                        style={styles.buttonSubmit}
                        ref={btnSubmit}
                        onPress={submit} 
                        >
                            <Text style={styles.submitText}>Finalizar Saída</Text>

                        </TouchableOpacity>



                        <TouchableOpacity 
                        
                        style={styles.buttonVoltar}
                        onPress={voltar}
                        
                        >
                            <Text style={styles.submitText}>Voltar</Text>

                        </TouchableOpacity>

                                         
                
                </KeyboardAvoidingView>
            
            
            </ScrollView>
                    

           
           
        </View>

    );

}

