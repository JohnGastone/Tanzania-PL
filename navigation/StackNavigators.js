import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../StackScreens/SignIn';
import SignUp from '../StackScreens/SignUp';
import Fixture from '../StackScreens/Fixture';
import Result from '../StackScreens/Result';
import Top from '../StackScreens/Top';
import Table from '../StackScreens/Table';


const Stack = createStackNavigator();
const StackNavigator = () => {
 return (
    <Stack.Navigator>

        <Stack.Screen name="Fixture" component={Fixture}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen name="SignIn" component={SignIn}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="SignUp" component={SignUp} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Result" component={Result} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Top" component={Top} 
            options={{
                headerShown: false,
            }}
        />
         <Stack.Screen name="Table" component={Table} 
            options={{
                headerShown: false,
            }}
        />
       
    </Stack.Navigator>
 );
};
export default StackNavigator;