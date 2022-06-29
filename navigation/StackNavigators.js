import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../StackScreens/SignIn';
import SignUp from '../StackScreens/SignUp';
import Extended from '../StackScreens/Extended';
import Result from '../StackScreens/Result';
import Top from '../StackScreens/Top';
import Table from '../StackScreens/Table';
import Namungo from '../StackScreens/Namungo';
import ResultNamungo from '../StackScreens/ResultNamungo';
import ResultYanga from '../StackScreens/ResultYanga';
import ResultSimba from '../StackScreens/ResultSimba';
import Polisi from '../StackScreens/Polisi';
import F1 from '../StackScreens/F1';
import F2 from '../StackScreens/F2';
import F3 from '../StackScreens/F3';
import Transfers from '../StackScreens/Transfers';
import Referee from '../StackScreens/Referees';
import LigiKuu from '../StackScreens/LigiKuu';
import Admin from '../StackScreens/Admin';
import ExportPDF from '../StackScreens/ExportPDF';

const Stack = createStackNavigator();
const StackNavigator = () => {
 return (
    <Stack.Navigator>

        <Stack.Screen name="Extended" component={Extended}
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
        <Stack.Screen name="Namungo" component={Namungo} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="ResultNamungo" component={ResultNamungo} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="ResultYanga" component={ResultYanga} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="ResultSimba" component={ResultSimba} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Polisi" component={Polisi} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="F1" component={F1} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="F2" component={F2} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="LigiKuu" component={LigiKuu} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="F3" component={F3} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Transfers" component={Transfers} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Referee" component={Referee} 
            options={{
                headerShown: false,
            }}
        />        
        <Stack.Screen name="Admin" component={Admin} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="ExportPDF" component={ExportPDF} 
            options={{
                headerShown: false,
            }}
        />

        
       
    </Stack.Navigator>
 );
};
export default StackNavigator;