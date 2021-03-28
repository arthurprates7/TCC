import React,{useState, useRef,useEffect} from 'react';
import { ActivityIndicator, Alert, View, SafeAreaView,Text,Image,KeyboardAvoidingView, TextInput, TouchableOpacity,FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import styles from './styles';
import Lista from './Lista';
import api from '../../../api';

export default function Visitantes({navigation}) {

  const[nome_visitante, setNomeVisitante] = useState('');
  const[numero,setNumero] = useState('');

  const [ infoEstoque, setinfoEstoque ] = useState(null);
  const [ produto, setProduto] = useState(null);

  const btnSubmit  = useRef(null);

  async function detail( idProduto ){

        setProduto(null);

        if(idProduto.length === 0){

            Alert.alert('Erro', 'Ocorreu um erro desconhecido');
            return;

        }

        await api.get(`/src/all/produto/${idProduto}`)
        .then(async function(response){

            setProduto(response.data);

            if(produto){

                navigation.navigate('SelecionaProduto', {
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
                Alert.alert("Erro", message);
            
            }catch(err){
                
                Alert.alert("Atenção", "Ocorreu um erro ao tentar processar a requisição!");
            
            }
        
        });


  }

  async function submit(){

    if(nome_visitante.length === 0){

        Alert.alert( 'Atenção', 'Informe o Nome do Visitante' );
        return

    }

   
    setinfoEstoque(null);

    await api.post('/src/all/pesquisavisitante',
    { nome_visitante})
    
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

      const res = await api.get('/src/all/getvisitantes')
      .then((response)=>{
              
          setinfoEstoque( response.data.visitantes );

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


 return (
   
    <SafeAreaView style={styles.container}>
              
      <Header 
      
          navigation={navigation}
      
      />

            <View style={styles.viewTextDashboard}>
                <Image style={styles.imgdashboard} source={require('../../assets/userblack.png')}/>
                <Text style={styles.textdashboard}>Listagem de Visitantes</Text>
            </View>
           
              <View
                style={styles.background}
                >
                    
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Visitante"
                    value={nome_visitante}
                    autoCorrect={false}
                    onChangeText={(value)=>{setNomeVisitante(value)}}
                    autoCapitalize={"characters"}
                />

            
                <TouchableOpacity 
                  onPress={submit} 
                  style={styles.buttonSubmit}
                  ref={btnSubmit}
                
                >
                    <Text style={styles.submitText}>Pesquisar</Text>

                </TouchableOpacity>

                {!infoEstoque && <ActivityIndicator style={{top: 5}} color="blue" size={50}/>}

                  {infoEstoque && 

                      <FlatList 

                          style={{  

                              width: '90%',
                              flex: 1,
                              marginTop: 15
                              
                              
                          }}

                          showsVerticalScrollIndicator={false}
                          keyExtractor={ (item)=> item.id  }
                          data={ infoEstoque }
                          renderItem={ 
                              ( {item} ) => {
                                  
                                  return( 

                                      <Lista 
                                      
                                          navigation={navigation}
                                          data={item}
                                          detail={detail}
                                          setProduto={setProduto}
                                                  
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