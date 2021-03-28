import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:"center",
        padding:15
    },
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
        fontSize:19,
        color:'#000000',
        fontWeight:"bold"
    },
    imgdashboard:{
        width:50,
        height:50
    },
    bloco:{
        top:25,
        backgroundColor: '#FFF',
        width: '90%',
        height: '50%',
        borderRadius: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //elevation: 2,
        shadowOpacity: 0.1,
        //shadowRadius: 2,
        marginBottom: 27,
        //borderWidth: 2,
        marginLeft:20
    },
    textobloco:{

        color: '#103D75',
        fontWeight: 'bold',
        fontSize: 20

    },

    viewImagem:{

        width: '40%',
        alignItems: 'center',
        marginLeft: 20

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
        width:130,
        height:150,
        

    },
    buttonSubmit:{
        backgroundColor:'#E55143',
        width: '90%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        padding:20
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    teste:{
        alignItems:'center',
        paddingBottom:17
    }

   
   

});

export default styles;