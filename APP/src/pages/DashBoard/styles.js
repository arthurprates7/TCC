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
        width:50,
        height:50
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
        borderWidth: 2
    },
    textobloco:{

        color: '#103D75',
        fontWeight: 'bold',
        fontSize: 15

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

        color: 'green',
        fontWeight: 'bold',
        fontSize: 18
        
    },

    imgcheck:{
        width:75,
        height:65,
        marginLeft: 40

    },

   
   

});

export default styles;