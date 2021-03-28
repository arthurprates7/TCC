import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{

        flex: 1,
        //alignItems: 'center'
        backgroundColor:'#cccccc'
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
        width:40,
        height:40
    },
    bloco:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 90,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        //elevation: 2,
        shadowOpacity: 0.1,
        //shadowRadius: 2,
        marginBottom: 27,
        borderWidth: 4
    },
    textobloco:{

        color: '#103D75',
        fontWeight: 'bold',
        fontSize: 15

    },

    viewImagem:{
        
        marginRight:20,
        marginTop:8
        
    },

    viewTexto:{

        width: '40%',
        alignItems: 'flex-start',
       
    },

    textoValor:{

        color: '#11B46B',
        fontWeight: 'bold',
        fontSize: 18
        
    },

    imgcheck:{
        width:60,
        height:70,
    },

    buttonSubmit:{
        backgroundColor:'#2AAB1B',
        width: '90%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    background:{
        flex:1,
        alignItems:"center",
    },
    input:{
        backgroundColor:'#FFF',
        width:'90%',
        height:50,
        marginBottom:20,
        color:'#000000',
        fontSize: 20,
        borderRadius: 20,
        padding:10,
  
    },
    imgcheck1:{
        width:30,
        height:30,
       
    },
    buttonSubmit1:{
        marginLeft:20,
        marginTop:20,
        borderRadius:20,
    },

   
   

});

export default styles;