import { StyleSheet } from "react-native";
import * as Font from 'expo-font';

const styles = StyleSheet.create({

  imgdashboard:{
    
    marginLeft:'30%',
    width:55,
    height:55,
    
},
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 40,
    
  },

  containerMenuBottons: {

    flex: 1,
    backgroundColor: '#f5f6fa',
    margin: 20,
    paddingHorizontal: 16,
    paddingBottom: 30,
    borderRadius: 15,
    marginTop: -28

},
  
  banner: {
    height:'25%',
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
    alignItems:'center',
    textAlign:'center'
  },

  titleBold: {
    
  },

  buttonsContainer: {
   
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },

  button: {
    height: 100,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 5,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 20,
    textAlign:"center"
  },

  buttonPrimary: {
    backgroundColor: '#fff',
  },
  
  buttonSecondary: {
    backgroundColor: '#fff',
  },

  totalConnections: {
    color: '#FFF',
    fontSize: 17,
    paddingTop:'5%',
    alignItems:'center',
    textAlign:'center',
    
  },

  totalConnections2: {
    color: '#FFF',
    fontSize: 17,
    paddingTop:'5%',
    alignItems:'center',
    textAlign:'center',

    
  },
  sairbutton:{

   
    color:'white'
  }
});

export default styles;