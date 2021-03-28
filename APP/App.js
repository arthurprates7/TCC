import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import DashBoard from './src/pages/DashBoard';
import Estoque from './src/pages/Estoque';
import Carrinho from './src/pages/Carrinho';
import SelecionaProduto from './src/pages/SelecionaProduto';
import ComprovantePedido from './src/pages/ComprovantePedido';
import EmprestimoRevista from './src/pages/emprestimoRevista';
import Emprestimos from './src/pages/Emprestimos';
import Visitantes from './src/pages/Visitantes';
import Renovacao from './src/pages/Renovacao';
import Devolucao from './src/pages/Devolucao';
import Acervo from './src/pages/Acervo';
import Erro from './src/pages/Erro';
import LandingAcervo from './src/pages/LandingAcervo';
import LandingVoluntario from './src/pages/LandingVoluntario';
import LandingFinanceiro from './src/pages/LandingFinanceiro';
import EntradaFinanceiro from './src/pages/EntradaFinanceiro';
import SaidaFinanceiro from './src/pages/SaidaFinanceiro';

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingAcervo">

            <Stack.Screen name="LandingFinanceiro" component={LandingFinanceiro} options={{headerShown:false}}/>
            <Stack.Screen name="EntradaFinanceiro" component={EntradaFinanceiro} options={{headerShown:false}}/>
            <Stack.Screen name="SaidaFinanceiro" component={SaidaFinanceiro} options={{headerShown:false}}/>
            <Stack.Screen name="LandingVoluntario" component={LandingVoluntario} options={{headerShown:false}}/>
            <Stack.Screen name="LandingAcervo" component={LandingAcervo} options={{headerShown:false}}/>
            <Stack.Screen name="Acervo" component={Acervo} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
            <Stack.Screen name="Estoque" component={Estoque} options={{headerShown:false}}/>
            <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown:false}}/>
            <Stack.Screen name="Emprestimos" component={Emprestimos} options={{headerShown:false}}/>
            <Stack.Screen name="SelecionaProduto" component={SelecionaProduto} options={{headerShown:false}}/>
            <Stack.Screen name="EmprestimoRevista" component={EmprestimoRevista} options={{headerShown:false}}/>
            <Stack.Screen name="ComprovantePedido" component={ComprovantePedido} options={{headerShown:false}}/>
            <Stack.Screen name="Visitantes" component={Visitantes} options={{headerShown:false}}/>
            <Stack.Screen name="Renovacao" component={Renovacao} options={{headerShown:false}}/>
            <Stack.Screen name="Devolucao" component={Devolucao} options={{headerShown:false}}/>
            <Stack.Screen name="Erro" component={Erro} options={{headerShown:false}}/>

            </Stack.Navigator>

        </NavigationContainer>


    );
}