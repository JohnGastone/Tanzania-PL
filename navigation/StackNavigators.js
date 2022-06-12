import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../StackScreens/SignIn';
import SignUp from '../StackScreens/SignUp';


const Stack = createStackNavigator();
const StackNavigator = () => {
 return (
<Stack.Navigator>
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
</Stack.Navigator>
 );
};
export default StackNavigator;