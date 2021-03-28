import React,{useState, useRef,useEffect} from 'react';
import { ActivityIndicator, Alert, View, SafeAreaView,Text,Image,AsyncStorage,KeyboardAvoidingView, TextInput, TouchableOpacity,FlatList } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import styles from './styles';
import Lista from './Lista';
import api from '../../../api';

export default function Acervo({navigation}) {

  const[nome_livro, setNomeLivro] = useState('');
  const[numero,setNumero] = useState('');

  const [ infoEstoque, setinfoEstoque ] = useState(null);
  const [ produto, setProduto] = useState(null);

  const btnSubmit  = useRef(null);

  

  async function submit(){

    if(nome_livro.length === 0){

        Alert.alert( 'Atenção', 'Informe o Nome do Livro' );
        return

    }

   
    setinfoEstoque(null);

    await api.post('/src/user/acervo/pesquisa',
    { nome_livro})
    
    .then(async function(response){

        
        setinfoEstoque( response.data.message );
                        
    })
    .catch(function(error){
    
        try{
        
            let message = typeof 
            error.response.data.message !== "undefined" ? 
            error.response.data.message : 
            "Houve uma falha ao tentar processar a requisição";
            Alert.alert("Erro", message);
        
        }catch(err){
            
            Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição!");
        
        }
    
    });

}


useEffect(()=>{
    
  async function getEstoque(){
    await setTestDeviceIDAsync('EMULATOR');
      const res = await api.get('/src/user/acervo')
      .then((response)=>{
        
                  
          setinfoEstoque( response.data.acervo );

      })
      .catch((error)=>{

          try{
          
              let message = typeof 
              error.response.data.message !== "undefined" ? 
              error.response.data.message : 
              "Ocorreu um erro ao tentar processar a requisição";
              Alert.alert("Erro", message);
              
          }catch(err){

              Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição");
              
          }

      });

  }
  
  getEstoque();

}, []);

async function getEstoque(){

    const res = await api.get('/src/user/acervo')
    .then((response)=>{
      
                
        setinfoEstoque( response.data.acervo );

    })
    .catch((error)=>{

        try{
        
            let message = typeof 
            error.response.data.message !== "undefined" ? 
            error.response.data.message : 
            "Ocorreu um erro ao tentar processar a requisição";
            Alert.alert("Erro", message);
            
        }catch(err){

            Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição");
            
        }

    });

}




 return (
   
    <SafeAreaView style={styles.container}>
              
      <Header 
      
          navigation={navigation}
      
      />

            <View style={styles.viewTextDashboard}>
                <Image style={styles.imgdashboard} source={require('../../assets/book.png')}/>
                <Text style={styles.textdashboard}>Acervo de Livros</Text>
            </View>
           
              <View
                style={styles.background}
                >
                    <Text style={styles.textdashboard1}>Digite o Nome do Livro para Pesquisa no Acervo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Livro"
                    value={nome_livro}
                    autoCorrect={false}
                    onChangeText={(value)=>{setNomeLivro(value)}}
                    autoCapitalize={"characters"}
                />

            
                <TouchableOpacity 
                  onPress={submit} 
                  style={styles.buttonSubmit}
                  ref={btnSubmit}
                
                >
                    <Text style={styles.submitText}>Pesquisar</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={()=>getEstoque()} 
                  style={styles.buttonSubmit1}
                  ref={btnSubmit}
               
                >
                    <Text style={styles.submitText}>Todos os Livros (Voltar)</Text>

                </TouchableOpacity>

               
                {!infoEstoque && <ActivityIndicator style={{top: 5}} color="white" size={50}/>}

                  {infoEstoque && 

                      <FlatList 

                          style={{  

                              
                              marginTop: 20
                              
                              
                          }}

                          showsVerticalScrollIndicator={false}
                          numColumns={2}
                          keyExtractor={ (item)=> item.id  }
                         
                          data={ infoEstoque }
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

              <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-6713191597542209/5976586574" // Test ID, Replace with your-admob-unit-id
                testDeviceID="EMULATOR"
                servePersonalizedAds // true or false
                />

             
           
              
             
            

    </SafeAreaView>   



  );
}