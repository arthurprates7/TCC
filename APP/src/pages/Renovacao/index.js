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

const Renovacao = props => {
    

    //console.log(props.route.params.array);
    //console.log(props.route.params);
    const [id, setID] = useState( props.route.params.id );
    const [codigo_livro, setCodigoLivro] = useState( props.route.params.codigo_livro );
    const [nome_livro, setNomeLivro] = useState( props.route.params.nome_livro );
    const [ codigo_visitante,setCodigoVisitante] = useState(props.route.params.codigo_visitante);
    const [ nome_visitante,setNomeVisitante] = useState(props.route.params.nome_visitante);
    const [ dias_emprestimo,setSelectedValue] = useState(props.route.params.dias_emprestimo);
    
    const [data_emprestimo, setDataEmprestimo] = useState(props.route.params.data_emprestimo);
    const [data_devolucao, setDataDevolucao] = useState('');
    const [data_devolucao2, setDataDevolucao2] = useState('');
    const [data_emprestimo2, setDataEmprestimo2] = useState(props.route.params.data_devolucao);


    function calculavalor(quantidadeTMP){

        setSelectedValue(quantidadeTMP);

        let dias = quantidadeTMP;
        let data = data_emprestimo;

        
        let nova_data = data.replace("-",",");
        let nova_data2 = nova_data.replace("-",",");
        
       
        let ano = nova_data2.split(",")[0];
        let mes = nova_data2.split(",")[1];
        var dia = nova_data2.split(",")[2];

        
        var time = new Date();
        time.setMonth(mes-1);
        time.setFullYear(ano);
        time.setDate(dia);

        time.setDate(time.getDate() + parseInt(dias));
        time.setMonth(time.getMonth());

        var data_devolucao2 = time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate();
       
        setDataDevolucao(data_devolucao2);


        let data_visualizar = ("0" + time.getDate()).slice(-2) + "/" + ("0" + (time.getMonth() + 1)).slice(-2) + "/" + time.getFullYear();
        setDataDevolucao2(data_visualizar.toString());
  }


  

  function voltar(){
        props.navigation.navigate('Emprestimos');
  }
 

   
    
    

    let now = new Date;
    let created_at = ("0" + now.getDate()).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();
    const [date,setNewDate]=useState(created_at) ;
    

     const btnSubmit  = useRef(null);

     async function submit(){
        await api.post('/src/all/renovacao',
        
        {id,dias_emprestimo,data_devolucao} 
    )
    .then(async function(response){

            navigation.navigate('ComprovantePedido');
    
    })
    .catch(function(error){
       
        try{
            
            let message = typeof 
            error.response.data.message !== "undefined" ? 
            error.response.data.message : 
            "Houve uma falha ao tentar fazer o Empréstimo";
            Alert.alert("Erro", message);
            
        
        }catch(err){
            
            props.navigation.navigate('ComprovantePedido');
           
        }
    
    });
    }


    return (

        <View style={{flex:1, justifyContent:"space-between"}}>
    
            <Header 
                navigation={props.navigation}
            />


            <ScrollView style={styles.containerScrollView}>
            
                <KeyboardAvoidingView 

                    style={styles.main} 
                    behavior={Platform.OS === 'ios' ? "padding" : ''}
                    enabled
                >
                
                    <Text style={styles.textdashboard}>Renovação de Livros</Text>
                    <Text style={styles.textdashboard}>Renovando o Empréstimo: {nome_livro} - Emprestado para {nome_visitante} por {dias_emprestimo} dias</Text>


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Verifique abaixo as informações do Livro Selecionado↓↓</Text>
                        <Text style={styles.textdashboard1}>Código do Livro: {codigo_livro}</Text>
                        <Text style={styles.textdashboard1}>Nome do Livro: {nome_livro}</Text>
                    
                    </View>



                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Preencha abaixo as informações de Datas↓↓</Text>
                        
                       
                        <Picker
                           selectedValue={dias_emprestimo}
                            style={{ height: 50, width: 150,width: '95%',marginBottom: 12,
                            backgroundColor: 'white',padding: 10,
                            fontSize: 14,
                            borderRadius: 8,
                            elevation: 7 }}
                            onValueChange={(itemValue, itemIndex) => calculavalor(itemValue) }
                           
                                >
                            <Picker.Item label="Renovar por Quantos Dias?" />
                            <Picker.Item label="14 Dias" value="14" />
                            <Picker.Item label="21 Dias" value="21" />

                        </Picker>


                        <TextInput
                           style={styles.textInput}
                            placeholder="Nova Data da Devolução"
                            value={data_devolucao2}
                            autoCorrect={false}
                            editable={false}
                        />
                    
                    </View>
                    
                        <TouchableOpacity 
                        style={styles.buttonSubmit}
                        ref={btnSubmit}
                        onPress={submit} 
                        >
                            <Text style={styles.submitText}>Finalizar Renovação</Text>

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

export default Renovacao;