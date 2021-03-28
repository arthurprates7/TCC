import React,{useState, useRef,useEffect} from 'react';
import { ActivityIndicator, Alert, View, SafeAreaView,Text,Image,KeyboardAvoidingView, TextInput, TouchableOpacity,FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import styles from './styles';
import Lista from './Lista';
import api from '../../../api';

export default function Emprestimos({navigation}) {

  const[codigo_livro, setCodigoLivro] = useState('');
  const[numero,setNumero] = useState('');

  const [ infoEstoquefora_prazo, setinfoEstoqueForaPrazo ] = useState(null);
  const [ infoEstoquedentro_prazo, setinfoEstoqueDentroPrazo ] = useState(null);
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

    if(codigo_livro.length === 0){

        Alert.alert( 'Atenção', 'Informe o Código do Livro' );
        return

    }

   
    setinfoEstoqueForaPrazo(null);

    await api.post('/src/all/pesquisaproduto',
    { codigo_livro})
    
    .then(async function(response){

        setinfoEstoqueForaPrazo( response.data.message );
                        
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

      const res = await api.get('/src/all/todosemprestimos')
      .then((response)=>{
          setinfoEstoqueForaPrazo( response.data.emprestimos[0].valor);
          setinfoEstoqueDentroPrazo( response.data.emprestimos[1].valor);

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
                <Image style={styles.imgdashboard} source={require('../../assets/return.png')}/>
                <Text style={styles.textdashboard}> Renovações/Devoluções</Text>
            </View>
           
              <View
                style={styles.background}
                >
                    
                <Text>Livros Fora do Prazo</Text>
                {!infoEstoquefora_prazo && <ActivityIndicator style={{top: 5}} color="blue" size={50}/>}

                  {infoEstoquefora_prazo && 

                      <FlatList 

                          style={{  

                              width: '90%',
                              flex: 1,
                              marginTop: 15
                              
                              
                          }}

                          showsVerticalScrollIndicator={false}
                          keyExtractor={ (item)=> item.id  }
                          data={ infoEstoquefora_prazo }
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

              <View
                style={styles.background}
                >
                    
                    <Text>Livros Dentro do Prazo</Text>
                {!infoEstoquedentro_prazo && <ActivityIndicator style={{top: 5}} color="blue" size={50}/>}

                  {infoEstoquedentro_prazo && 

                      <FlatList 

                          style={{  

                              width: '90%',
                              flex: 1,
                              marginTop: 15
                              
                              
                          }}

                          showsVerticalScrollIndicator={false}
                          keyExtractor={ (item)=> item.id  }
                          data={ infoEstoquedentro_prazo }
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