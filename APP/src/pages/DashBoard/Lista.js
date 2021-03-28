
import React, { useState, useEffect } from 'react';
import {

    View,
    Text,
    Image

} from 'react-native';

import styles from './styles';

const Lista = ({data})=>{

    const[ image, setImage ] = useState(null);

    useEffect(()=>{

        function getImage(){

            switch(data.id){

                case 'total_livros':

                    setImage( require("../../assets/book.png"));
                
                break;

                case 'livros_emprestados':

                    setImage( require("../../assets/hands.png"));

                break;

                case 'livros_atrasados':

                    setImage( require("../../assets/exclamation.png"));

                break;

                case 'visitantes_cadastrados':

                    setImage( require("../../assets/user.png") );

                break;

                case 'voluntarios':

                    setImage( require("../../assets/voluntario.png") );

                break;

                case 'livros_emdia':

                    setImage( require("../../assets/check.png") );

                break;

                case 'valor_caixa':

                    setImage( require("../../assets/registradora.png") );

                break;

            }

        }

        getImage();

    }, []);

    return(

        <View style={styles.bloco}>     

            <View style={styles.viewImagem}>
                <Image style={styles.imgcheck} source={image}/>
            </View>

            <View style={styles.viewTexto}>
                <Text style={styles.textobloco}>{data.nome}</Text>
                <Text style={styles.textoValor}>{data.valor}</Text>

            </View>
               
                
        </View>
    )

}

export default Lista;