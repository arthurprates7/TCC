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

const Devolucao = props => {

    
    const {produto} = props.route.params;
    const [id, setID] = useState( props.route.params.id );
    const [codigo_livro, setCodigoLivro] = useState( props.route.params.codigo_livro );
    const [nome_livro, setNomeLivro] = useState( props.route.params.nome_livro );
    const [dias_emprestimo, setSelectedValue] = useState(props.route.params.dias_emprestimo);
    const [ codigo_visitante,setCodigoVisitante] = useState(props.route.params.codigo_visitante);
    const [ nome_visitante,setNomeVisitante] = useState(props.route.params.nome_visitante);
    const [quantidade,setQuantidade] = useState();
    const [data_devolucao, setDataDevolucao] = useState(props.route.params.data_devolucao);

    const [data_devolucao2, setDataDevolucao2] = useState('');
    const [data_emprestimo, setDataEmprestimo] = useState(props.route.params.data_devolucao);

    useEffect(()=>{
        
        convertDataBDtoBR();
    
    }, []);


    function convertDataBDtoBR(){

        let data_formatada = data_devolucao;

        let nova_data = data_formatada.replace("-",",");
        let nova_data2 = nova_data.replace("-",",");

        let ano = nova_data2.split(",")[0];
        let mes = nova_data2.split(",")[1];
        var dia = nova_data2.split(",")[2];

        
        let data_visualizar = (dia+ "/" + mes + "/" + ano);


        setDataDevolucao2(data_visualizar.toString());
        

    }


    function convertDataBRtoBD(data){

            let data_backend = data.replace(/\//g, '-');
            data_backend = data_backend.split("-");
            data_backend = `${data_backend[2]}-${data_backend[1]}-${data_backend[0]}`;
           setDataDevolucao(data_backend);
            setDataDevolucao2(data);

    }
    


    function voltar(){
            props.navigation.navigate('Emprestimos');
    }
 
     const btnSubmit  = useRef(null);

     async function submit(){

        
        
        await api.post('/src/all/devolucao',
        
        {id,codigo_livro,nome_livro,codigo_visitante,nome_visitante,data_emprestimo,dias_emprestimo,data_devolucao} 
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
                
                    <Text style={styles.textdashboard}>Devolução de Livros</Text>
    <Text style={styles.textdashboard}>Devolvendo o Livro {props.route.params.codigo_livro} - {props.route.params.nome_livro}{'\n'}</Text>


                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Verifique abaixo as informações do Livro Selecionado↓↓</Text>
                        <Text style={styles.textdashboard1}>Código do Livro: {props.route.params.codigo_livro}</Text>
                        <Text style={styles.textdashboard1}>Nome do Livro: {props.route.params.nome_livro}</Text>
                        <Text style={styles.textdashboard1}>Emprestado para: {props.route.params.nome_visitante}</Text>
                    </View>

                    

                    <View style={styles.viewTextDashboard1}>
                        <Text style={styles.textdashboard1}>Preencha abaixo a Data de Devolução↓↓</Text>
                        <TextInput
                           style={styles.textInput}
                            placeholder="Data da Devolução do Livro"
                            value={data_devolucao2}
                            onChangeText={(value)=>{convertDataBRtoBD(value)}}
                            autoCorrect={false}
                            keyboardType={"default"}
                        />
                    
                    </View>
                    
                        <TouchableOpacity 
                        style={styles.buttonSubmit}
                        ref={btnSubmit}
                        onPress={submit} 
                        >
                            <Text style={styles.submitText}>Finalizar Devolução</Text>

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

export default Devolucao;