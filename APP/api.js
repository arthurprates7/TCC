import { AsyncStorage } from 'react-native';
import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({

  baseURL: 'http://localhost:8000',

});

api.interceptors.request.use(async function( config ){

  config.headers = {

    ...config.headers,
    'User-Agent': 'ProjetoCasa.v1'

  };

  if( config.url !== '/src/user/login' ){

    let token = await AsyncStorage.getItem('@Vazamento:usuario:token');

    if(token !== null)
      config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export default api;