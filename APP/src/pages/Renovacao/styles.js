import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        
        flex: 1,
        backgroundColor:'#cccccc',
        justifyContent: 'space-between'
        
    },

    containerScrollView:{

        flex: 1,
        width: '100%',
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'white',
        height: 100,
        elevation: 10,
        height: 'auto',
        backgroundColor:'#cccccc',

    },

    main:{

        flex:1,
        marginTop: 15,
        width:'100%',
        alignItems: 'center'

    },

    textInput:{

        
        marginBottom: 12,
        backgroundColor: 'white',
        width: '95%',
        padding: 10,
        fontSize: 14,
        borderRadius: 8,
        elevation: 7

    },
    
    viewTextDashboard:{
        padding:1,
        height: 400,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },

    textdashboard:{
        fontSize:20,
        color:'#000000',
        textAlign:'center'
    },

    imgdashboard:{
        width:40,
        height:40
    },
    bloco:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 78,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //elevation: 2,
        shadowOpacity: 0.1,
        //shadowRadius: 2,
        marginBottom: 27,
        //borderWidth: 2
    },
    textobloco:{

        color: '#103D75',
        fontWeight: 'bold',
        fontSize: 15

    },

    viewImagem:{
        flex: 1,
        width: '30%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft:15
    },

    viewTexto:{

        width: '60%',
        alignItems: 'flex-start',
        marginRight: 80


    },

    textoValor:{

        color: '#11B46B',
        fontWeight: 'bold',
        fontSize: 18
        
    },

    imgcheck:{
        width:'90%',
        height:300,
        borderRadius:20,
        margin:15
    },
    buttonSubmit:{
        backgroundColor:'#2AAB1B',
        width: '90%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginBottom:15
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    background:{
        flex:1,
        alignItems:"center",
        justifyContent: 'space-between'
        
    },

    input:{
        backgroundColor:'#FFF',
        width:'90%',
        height:45,
        marginBottom:15,
        color:'#000000',
        fontSize: 20,
        borderRadius: 20,
    },

    buttonVoltar:{
        backgroundColor:'#E55143',
        width: '90%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        
    },

    viewTextDashboard1:{
        width: '90%',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'flex-start',
        marginBottom:30
    },

    textdashboard1:{
        fontSize:15,
        color:'#000000',
        textAlign:'center'
    },
   
   

});

export default styles;