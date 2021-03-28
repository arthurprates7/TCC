import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

   
    
    header:{
        
        alignItems: 'center',
        backgroundColor: '#000000',


    },

    containerHeader:{
        
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight:'20%',
        marginBottom: 5,
        width: '100%'
    },

    logomarca:{

        marginRight:35,
        width: 64,
        height: 64,
        borderRadius:12

    },
    logomarca1:{

       
        width: 30,
        height: 30,
        borderRadius:12

    },


    titulo:{     
        
        fontSize: 24,
        color: '#FFF'
    

    },

    exit:{

        marginRight: 15,
        width: 23,
        height: 23

    },

    yellow:{

        width: '100%',
        height: 5,
        backgroundColor: '#F7DB34'

    },

});

export default styles;