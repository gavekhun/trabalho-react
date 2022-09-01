import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from "../Inicio";
import Login from "../Login";

function Router( ){
    const Stack = createNativeStackNavigator();

    return(
    
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name= 'Inicio'
            component= {Inicio}
            options={{
                headerShown: false
            }}
             
             />
             <Stack.Screen
             name='Login'
             component={Login}
             options={{
                headerShown: false
            }}
             
             />
        </Stack.Navigator>
    </NavigationContainer>
    


    );
}
export default Router;