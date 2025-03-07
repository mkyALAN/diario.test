import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './screens/LoginScreen';
import { ListarObras } from './screens/ListarObras';
import { CadastrarObra } from './screens/CadastrarObra';
import { EditarObra } from './screens/EditarObra';
import { ExcluirObra } from './screens/ExcluirObra';
import { RevisarObra } from './screens/RevisarObra';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarObras">
                <Stack.Screen
                    name="ListarObras"
                    component={ListarObras}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}   
                />
                <Stack.Screen
                    name="CadastrarObra"
                    component={CadastrarObra}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditarObra"
                    component={EditarObra}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ExcluirObra"
                    component={ExcluirObra}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RevisarObra"
                    component={RevisarObra}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;