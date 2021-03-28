
import React, { useState, useEffect,useRef } from 'react';
import {

    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native';

import styles from './styles';

const Lista = props =>{

    const btnSubmit  = useRef(null);
    const {data} = props;
    
    return(

        <View style={styles.bloco}>    

            <View style={styles.viewImagem}>
                <Image style={styles.imgcheck} source={{uri:data.image}}></Image>
            </View>



            <View style={styles.viewTexto}>
                <Text style={styles.textobloco}>{data.categoria} - {data.marca}</Text>
                <Text style={styles.textobloco}>Número: {data.numero}</Text>
                <Text style={styles.textobloco}>Caixas a Vender: {data.quantidade}</Text>
                <Text style={styles.textobloco}>Total Venda: {data.total_venda}</Text>
            </View>



            <TouchableOpacity 
                  style={styles.buttonSubmit1}
                  onPress={()=>{

                    props.deletarProduto(data.id)

                  }} 
                  ref={btnSubmit}
                >
                 <Image style={styles.imgcheck1} source={require('../../assets/rubbishbin_102620.png')}></Image>
                </TouchableOpacity>
           
        </View>

      
    )

}

export default Lista;