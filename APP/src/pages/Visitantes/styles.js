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
        width: '100%',
        height: 105,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //elevation: 2,
        shadowOpacity: 0.1,
        //shadowRadius: 2,
        marginBottom: 27,
        borderWidth: 2
    },
    textobloco:{

        color: '#000000',
        fontWeight: 'bold',
        fontSize: 13

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
        borderRadius:7
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    imgcheck:{
        width:90,
        height:'90%',
        marginLeft: 1,
        borderRadius:50
    },
    viewImagem:{
        alignItems: 'center',
        marginLeft: 20,
        justifyContent:'center'

    },
    viewTexto:{
        marginLeft:10
    }
    

    



});

export default styles;