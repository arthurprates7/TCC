import React , {useState, useEffect, useRef} from 'react';
import {

    View, 
    KeyboardAvoidingView,
    Image,
    TextInput, 
    TouchableHighlight,
    TouchableOpacity, 
    Keyboard,
    Alert ,
    AsyncStorage ,
    Text,
    StyleSheet, 
    SafeAreaView, 
    Animated,
    Platform

} from 'react-native';
import api from '../../../api';
import {useNavigation} from '@react-navigation/native';

export default function Home(){
      const navigation = useNavigation();

      const[email,setEmail] = useState('');
      const[password,setPassword] = useState('');

      const inputSenha = useRef(null);
      const btnSubmit  = useRef(null);
      
        function acervo(){
            navigation.navigate("LandingAcervo");
        }


      async function submit(){
          
          await api.post('/src/user/login',
          
              {email,password} 
          )
          .then(async function(response){
                         
              await AsyncStorage.setItem("@ProjetoCasa:usuario:token", response.data.token);
              const token = await AsyncStorage.getItem("@ProjetoCasa:usuario:token");
  
              if(token === null)
                  throw "Não foi possível setar um token";
  
                  navigation.navigate('LandingVoluntario');
          
          })
          .catch(function(error){
             
              try{
              
                  let message = typeof 
                  error.response.data.message !== "undefined" ? 
                  error.response.data.message : 
                  "Houve uma falha ao tentar fazer login";
                  Alert.alert("Erro", message);
                  
              
              }catch(err){
                  
                  Alert.alert("Atenção", "Ocorreu um erro ao tentar realizar o login");
                 
              }
          
          });
      
      }
         
    
      useEffect(async ()=>{

        const token = await AsyncStorage.getItem("@ProjetoCasa:usuario:token");
        
        if(token)
            navigation.navigate('LandingVoluntario');
                  

      }, []);



  return (
        <KeyboardAvoidingView 

            behavior={ Platform.select( { android: "height", ios: "padding" } ) }
            style={styles.background}
            enabled={true}

        >
            
            <Image style={styles.img} source={require('../../assets/pp.png')} />
                       
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                autoCorrect={false}
                onChangeText={(value)=>{setEmail(value)}}
                autoCapitalize="none"
                onSubmitEditing={

                    ()=>{

                        inputSenha.current.focus();

                    }

                }

            />

            <TextInput

                secureTextEntry={true}
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={(value)=>{setPassword(value)}}
                autoCorrect={false}
                ref={inputSenha}

                onSubmitEditing={submit}
            />


            <TouchableOpacity 
                onPress={submit} 
                style={styles.buttonSubmit}
                ref={btnSubmit}
                
                >
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={acervo} 
                style={styles.buttonSubmit1}
                ref={btnSubmit}
                
                >
                <Text style={styles.submitText}>Voltar Acervo</Text>
            </TouchableOpacity>
            

      </KeyboardAvoidingView>


);
}

const styles = StyleSheet.create({
  background:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#FFF'
  },
  text:{
     
      position: "absolute",
      color:'#FFF',
      width: 65,
      height: 31,
      left: 110,
      top: 360,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: 31

  },
  containerLogo:{
      flex:1,
      justifyContent:'center'
  },
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'90%',
      paddingBottom:150
  },
  input:{
      backgroundColor:'#2b2b2a',
      width:'90%',
      marginBottom:15,
      color:'#F2F1ED',
      fontSize: 20,
      borderRadius: 10,
      padding:15,
      

  },
  buttonSubmit:{
      backgroundColor:'#000000',
      width: '90%',
      height:50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:7
  },
  buttonSubmit1:{
    backgroundColor:'green',
    width: '90%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:7
},
  submitText:{
      color:'#FFF',
      fontSize:18
  },
  buttonrecovery:{
      marginTop:10,
  },
  recoveryText:{
      color:'#FFF'
  },
  buttonregister:{
      backgroundColor:'#514B99',
      width: '150%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:7
  },
  registerText:{
      color:'#FFF'
  },
  img:{

    position: 'relative',
    width: 200,
    height: 350,
    left: 0,
    top: 28,
    
    marginBottom: 55

  }




  

});
 
