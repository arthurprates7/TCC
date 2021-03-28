import React from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';

import styles from './styles';

const Footer = (props) => {

    const {navigation} = props;

    function estoque(){
        navigation.navigate("Estoque");
    }

    function carrinho(){
        navigation.navigate("Emprestimos");
    }

    function dashboard(){
       navigation.navigate("DashBoard");
    }

    function revista(){
        navigation.navigate("EmprestimoRevista");
     }

     function visitantes(){
        navigation.navigate("Visitantes");
     }
 

 return (
  
    <View style={styles.menu}>
                      
        <View style={styles.menufooter}>
            <TouchableOpacity onPress={dashboard}>
                <Image style={styles.imgmenu} source={require('../../../assets/dashboardico.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.menufooter}>
            <TouchableOpacity onPress={estoque}>
                <Image style={styles.imgmenu} source={require('../../../assets/white.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.menufooter}>
            <TouchableOpacity onPress={revista}>
                <Image style={styles.imgmenu} source={require('../../../assets/revista.png')}/>
            </TouchableOpacity>
        </View>

        


        <View style={styles.menufooter}>
            <TouchableOpacity onPress={carrinho}>
                <Image style={styles.imgmenu} source={require('../../../assets/hands2.png')}/>
            </TouchableOpacity>
        
        </View>

        <View style={styles.menufooter}>
            <TouchableOpacity onPress={visitantes}>
                <Image style={styles.imgmenu} source={require('../../../assets/visitantes.png')}/>
            </TouchableOpacity>
        </View>

    </View>
  );
}

export default Footer;