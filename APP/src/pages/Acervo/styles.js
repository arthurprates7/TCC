import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    
    
        container:{
            flex: 1,
            //alignItems: 'center'
            backgroundColor:'#cccccc',
        },
        viewTextDashboard:{
            padding:20,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
        },
        textdashboard:{
            fontSize:25,
            color:'#000000',
        },
        imgdashboard:{
            width:32,
            height:32
        },
         bloco:{
            backgroundColor: '#FFF',
            borderRadius: 15,
            marginBottom: 27,
            borderWidth: 2,
            width:170,
            height:'auto',
            padding:'3%',
            marginLeft:5
            
        },
        textobloco:{
    
            color: 'black',
            fontWeight: 'bold',
            fontSize: 10,
            textAlign:"center",
           
        },
        input:{
            marginBottom: 12,
            backgroundColor: 'white',
            width: '95%',
            padding: 10,
            fontSize: 14,
            borderRadius: 8,
            elevation: 7
      
        },
        background:{
            flex:1,
            alignItems:"center",
        },
        buttonSubmit:{
            backgroundColor:'#000000',
            width: '90%',
            height:40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:7,
            marginBottom:5
        },
        submitText:{
            color:'#FFF',
            fontSize:18
        },
        imgcheck:{
            width:90,
            height:100,
            
        },
        viewImagem:{
            alignItems: 'center',
            marginLeft: 5,
            justifyContent:'center'
            
        },
        viewTexto:{
            marginLeft:3,
            
        },
        buttonSubmit1:{
            backgroundColor:'green',
            width: '90%',
            height:40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:7
        },
        
    
        
    
    
    
    
    



});

export default styles;