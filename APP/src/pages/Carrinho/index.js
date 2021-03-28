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
        Picker,
    TextInput } from 'react-native';

import styles from './styles';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import api from '../../../api';
import Lista from './Lista';

export default function Carrinho( {navigation} ){

    const [ infoCarrinho, setInfoCarrinho ] = useState([]);
    const [ nome_cliente,setNome_Cliente] = useState('');
    const [total_geral, setTotalVenda] = useState('0,00');
    const [forma_pagamento, setSelectedValue] = useState('');

    const btnSubmit  = useRef(null);

    async function submit(){
         
          
        await api.post('/src/all/finalizacarrinho',
        
            {nome_cliente,forma_pagamento,total_geral} 
        )
        .then(async function(response){
                
                navigation.navigate('ComprovantePedido');
        
        })
        .catch(function(error){
           
            try{
            
                let message = typeof 
                error.response.data.message !== "undefined" ? 
                error.response.data.message : 
                "Houve uma falha ao tentar processar a requisição";
                Alert.alert("Aviso", message);
                navigation.navigate('Carrinho');
            
            }catch(err){
                
                Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição!");
               
            }
        
        });
    
    }

    async function getCarrinho(){

        setInfoCarrinho([]);

        const res = await api.get('/src/all/carrinho')
        .then((response)=>{
                
            setInfoCarrinho( response.data.carrinho );
            setTotalVenda( response.data.total );


        })
        .catch((error)=>{

            try{
            
                let message = typeof 
                error.response.data.message !== "undefined" ? 
                error.response.data.message : 
                "Ocorreu um erro ao tentar processar a requisição";
                Alert.alert("Alerta", message);
                navigation.navigate('Estoque');
                
            }catch(err){

                Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição");
                
            }

        });

    }

    async function deletarProduto(idProduto){
          
        await api.delete(`/src/all/produto/delete/${idProduto}`)
        .then(async function(response){
                
            getCarrinho();
        
        })
        .catch(function(error){
           
            try{
            
                let message = typeof 
                error.response.data.message !== "undefined" ? 
                error.response.data.message : 
                "Houve uma falha ao tentar processar a requisição";
                Alert.alert("Aviso", message);
                navigation.navigate('Carrinho');
            
            }catch(err){
                
                Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição!");
               
            }
        
        });
    
    }
               
    useEffect(()=>{
                
        getCarrinho();

    }, []);

    return (
    
        <SafeAreaView style={styles.container}>
            
            <Header 
            
                navigation={navigation}
            
            />

            <View style={styles.viewTextDashboard}>
                <Image style={styles.imgdashboard} source={require('../../assets/shopping-cart-solid.png')}/>
                <Text style={styles.textdashboard}> Carrinho</Text>
            </View>


            <View style={{

                flex:1,
                alignItems: 'center'

            }}>

                {infoCarrinho && 

                    <FlatList 

                        style={{  

                             width: '90%',
                             
                             flex: 1,
                             
                            
                        }}

                        showsVerticalScrollIndicator={false}
                        keyExtractor={ (item)=> item.id  }
                        data={ infoCarrinho }
                        renderItem={ 
                            ( {item} ) => {
                                 
                                return( 

                                    <Lista 
                                    
                                        navigation={navigation}
                                        data={item}
                                        deletarProduto={deletarProduto}
                                                
                                    />

                                )                                                                
                            }
                        }
                        
                    />
                    

                }


               

            </View>

            

            <View
                style={styles.background}
                >

                <Text>Somatória do Carrinho: {total_geral}</Text>
                    
                <TextInput
                    style={styles.input}
                    placeholder="Nome Cliente"
                    value={nome_cliente}
                    autoCorrect={false}
                    onChangeText={(value)=>{setNome_Cliente(value)}}
                    
                />

                <Picker
                        selectedValue={forma_pagamento}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Selecione uma Opção" value="" />
                        <Picker.Item label="Dinheiro" value="1" />
                        <Picker.Item label="Débito" value="2" />
                        <Picker.Item label="Crédito 1X" value="3" />
                        <Picker.Item label="Crédito 2X" value="4" />
                        <Picker.Item label="Crédito 3x" value="5" />
                        <Picker.Item label="Crédito 4x" value="6" />
                        <Picker.Item label="Crédito 5x" value="7" />
                        <Picker.Item label="Crédito 6x" value="8" />
                        <Picker.Item label="Crédito 7x" value="9" />
                        <Picker.Item label="Crédito 8x" value="10" />
                        <Picker.Item label="Crédito 9x" value="11" />
                        <Picker.Item label="Crédito 10x" value="12" />
                        <Picker.Item label="Crédito 11x" value="13" />
                        <Picker.Item label="Crédito 12x" value="14" />
                    </Picker>

                <TouchableOpacity 
                  onPress={submit} 
                  style={styles.buttonSubmit}
                  ref={btnSubmit}
                
                >
                    <Text style={styles.submitText}>Finalizar Venda</Text>

                </TouchableOpacity>
                </View>




           

        </SafeAreaView>
        
    );

}