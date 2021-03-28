import React, {useEffect, useState} from 'react';
import {    
        Alert,
        AsyncStorage, 
        FlatList,
        Image,  
        Text,    
        TouchableOpacity,  
        SafeAreaView,    
        View } from 'react-native';

import styles from './styles';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import api from '../../../api';
import Lista from './Lista';
import { NavigationEvents } from 'react-navigation';

export default function DashBoard( {navigation} ){

    const [ infoDashboard, setInfoDashboard ] = useState([]);

    
            
    useEffect(()=>{

        async function getDashboard(){

            const res = await api.get('/src/all/dashboard')
            .then((response)=>{
                    
                setInfoDashboard( response.data.dashboard );
    
            })
            .catch((error)=>{
                if(error.response.status === 401){
                    Alert.alert("Sessão Expirada",error.response.data.message);
                    navigation.navigate('Home');
                }else{
                    try{
                    
                        let message = typeof 
                        error.response.data.message !== "undefined" ? 
                        error.response.data.message : 
                        "Ocorreu um erro ao tentar processar a requisição";
                        Alert.alert("Erro", message);
                        
                    }catch(err){
        
                        Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição");
                        
                    }
    
                }
                   
            });
    
        }
        
        getDashboard();

    }, []);

    return (
    
        <SafeAreaView style={styles.container}>
            
            <Header 
            
                navigation={navigation}
            
            />

            <View style={styles.viewTextDashboard}>
                <Image style={styles.imgdashboard} source={require('../../assets/dashboard.png')}/>
                <Text style={styles.textdashboard}>DashBoard</Text>
            </View>


            <View style={{

                flex:1,
                alignItems: 'center'

            }}>

                {infoDashboard && 

                    <FlatList 

                        style={{  

                             width: '90%',
                             flex: 1,
                             
                            
                        }}

                        showsVerticalScrollIndicator={false}
                        keyExtractor={ (item)=> item.id  }
                        data={ infoDashboard }
                        renderItem={ 
                            ( {item} ) => {
                                 
                                return( 

                                    <Lista 
                                    
                                        navigation={navigation}
                                        data={item}
                                                
                                    />

                                )                                                                
                            }
                        }

                    />

                }

            </View>

           

        </SafeAreaView>
        
    );

}