import React , {useState, useEffect, useRef} from 'react';
import {
    KeyboardAvoidingView,
    Image,
    TextInput, 
    TouchableOpacity, 
    Alert ,
    AsyncStorage ,
    Text,
    StyleSheet, 
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
            navigation.navigate("Cadastro");
        }


      async function submit(){
          
          await api.post('/src/user/login',
          
              {email,password} 
          )
          .then(async function(response){
                         
              await AsyncStorage.setItem("@Vazamento:usuario:token", response.data.token);
              const token = await AsyncStorage.getItem("@Vazamento:usuario:token");
  
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
                navigation.navigate('LandingVoluntario');
                //   Alert.alert("Atenção", "Ocorreu um erro ao tentar realizar o login");
                 
              }
          
          });
      
      }
         
    
      useEffect(async ()=>{

        const token = await AsyncStorage.getItem("@Vazamento:usuario:token");
        
        if(token)
            navigation.navigate('LandingVoluntario');
                  

      }, []);



  return (
        <KeyboardAvoidingView 

            behavior={ Platform.select( { android: "height", ios: "padding" } ) }
            style={styles.background}
            enabled={true}

        >
            
            <Image style={styles.img} source={require('../../assets/logo2.png')} />
                       
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
                <Text style={styles.submitText}>Cadastro</Text>
            </TouchableOpacity>
            

      </KeyboardAvoidingView>


);
}

const styles = StyleSheet.create({
  background:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#3392bf'
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
      backgroundColor:'#FFFFFF',
      width:'90%',
      marginBottom:15,
      color:'#000000',
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
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:7,
    top:10
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
    height: 200,
    left: 0,
    top: 28,
    
    marginBottom: 55

  }




  

});
 
