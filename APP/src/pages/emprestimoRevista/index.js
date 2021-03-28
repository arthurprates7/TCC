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

export default function Estoque({navigation}) {

    const [codigo_revista,setCodigoRevista] =useState('');
    const [nome_revista,setNomeRevista] =useState('');
    const [ codigo_visitante,setCodigoVisitante] = useState("US");
    const [ nome_visitante,setNomeVisitante] = useState('');
    const [dias_emprestimo, setSelectedValue] = useState('');
    const [data_devolucao, setDataDevolucao] = useState('');
    const [data_devolucao2, setDataDevolucao2] = useState('');
    const [data_emprestimo, setDataEmprestimo] = useState('');

    


    function calculavalor(quantidadeTMP){

        setSelectedValue(quantidadeTMP);

        let dias = quantidadeTMP;
        let data_emprestimo = date;

        let nova_data = data_emprestimo.replace("/",",");
        let nova_data2 = nova_data.replace("/",",");

        let dia = nova_data2.split(",")[0];
        let mes = nova_data2.split(",")[1];
        var ano = nova_data2.split(",")[2];


        var time = new Date();
        time.setMonth(mes-1);
        time.setFullYear(ano);
        time.setDate(dia);

        
        time.setDate(time.getDate() + parseInt(dias));

        time.setMonth(time.getMonth() +1);

        var data_emprestimo2 = ano+"-"+mes+"-"+dia;

        setDataEmprestimo(data_emprestimo2);
        
        var data_devolucao2 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
        setDataDevolucao(data_devolucao2);
        let data_visualizar = ("0" + time.getDate()).slice(-2) + "/" + ("0" + (time.getMonth() + 1)).slice(-2) + "/" + time.getFullYear();
        

        setDataDevolucao2(data_visualizar.toString());

        setCodigoRevista("REV");
    setNomeRevista("REVISTA");
  }


  

  function voltar(){
        navigation.navigate('LandingVoluntario');
  }
 

  
  async function buscaNome(){

    alert("Aguarde um pouco! Estamos Pesquisando um Nome parecido!");
    await api.post('/src/all/pesquisavisitante',
        
    {nome_visitante} 
        )
        .then(async function(response){


            setCodigoVisitante(response.data.message[0].codigo);
            setNomeVisitante(response.data.message[0].nome_visitante);
               //preencher o nome corretamente e o codigo do visitante

        })
        .catch(function(error){
        
            try{
                
                let message = typeof 
                error.response.data.message !== "undefined" ? 
                error.response.data.message : 
                "Houve uma falha ao tentar realizar a requisicao";
                Alert.alert("Erro", message);
                
            
            }catch(err){
                
                Alert.alert("Erro", "Houve uma falha ao tentar realizar a requisicao");
            
            }

});

  }
    

    let now = new Date;
    let created_at = ("0" + now.getDate()).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();
    const [date,setNewDate]=useState(created_at) ;
    


     const btnSubmit  = useRef(null);

     async function submit(){
        await api.post('/src/all/emprestimo/revistas',
        
        {codigo_revista,nome_revista,codigo_visitante,nome_visitante,data_emprestimo,dias_emprestimo,data_devolucao} 
    )
    .then(async function(response){

            navigation.navigate('ComprovantePedido');
    
    })
    .catch(function(error){
       
        try{
            
            let message = typeof 
            error.response.data.message !== "undefined" ? 
            error.response.data.message : 
            "Houve uma falha ao tentar fazer o Empréstimo da Revista Verifique o Nome do Visitante e o Código dele";
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
                
                    <Text style={styles.textdashboard}>Empréstimo de Revista</Text>
                    <Text style={styles.textdashboard}>Emprestando Revista - REV - REVISTA</Text>


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Verifique abaixo as informações da Revista Selecionada↓↓</Text>
                        <Text style={styles.textdashboard1}>Código da Revista: REV</Text>
                        <Text style={styles.textdashboard1}>Nome da Revista: REVISTA</Text>
                    
                    </View>

                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Preencha abaixo as informações do Visitante↓↓</Text>
                        <TextInput
                           style={styles.textInput}
                            placeholder="Código do Visitante"
                            value={codigo_visitante}
                            onChangeText={(value)=>{setCodigoVisitante(value)}}
                            autoCorrect={false}
                            autoCapitalize={"characters"}
                            keyboardType={"number-pad"}

                        />
                        <Text style={styles.textdashboard1}>Favor digitar o Nome Completo do Visitante↓↓</Text>

                        <TextInput
                           style={styles.textInput}
                            placeholder="Nome do Visitante"
                            value={nome_visitante}
                            onChangeText={(value)=>{setNomeVisitante(value)}}
                            autoCorrect={false}
                            autoCapitalize={"characters"}
                        />
                    
                    <TouchableOpacity onPress={()=>buscaNome()}>
                            <Image style={{width:40,height:40}} source={require('../../assets/lupa.png')}></Image>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Preencha abaixo as informações de Datas↓↓</Text>
                        <TextInput
                           style={styles.textInput}
                            placeholder="Data do Empréstimo do Livro"
                            value={date}
                            onChangeText={(value)=>{setNewDate(value)}}
                            autoCorrect={false}
                            keyboardType={"default"}
                        />


                        <Picker
                            selectedValue={dias_emprestimo}
                            style={{ height: 50, width: 150,width: '95%',marginBottom: 12,
                            backgroundColor: 'white',padding: 10,
                            fontSize: 14,
                            borderRadius: 8,
                            elevation: 7 }}
                            onValueChange={(itemValue, itemIndex) => calculavalor(itemValue) }
                                >
                            <Picker.Item label="Selecione Quantos Dias de Empréstimo" />
                            <Picker.Item label="14 Dias" value="14" />
                            <Picker.Item label="21 Dias" value="21" />

                        </Picker>


                        <TextInput
                           style={styles.textInput}
                            placeholder="Data da Devolução"
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
                            <Text style={styles.submitText}>Finalizar Empréstimo de Revista</Text>

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

