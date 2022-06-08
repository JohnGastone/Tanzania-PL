import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../StackScreens/SignIn';
import Referees from '../StackScreens/Referees';
import Home from '../StackScreens/SignIn';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();
const StackNavigator = () => {
 return (
<Stack.Navigator>
<Stack.Screen name="Sign in or Click Register" component={SignIn}
    options={{
        headerShown: false,
    }}
/>
<Stack.Screen name="Referees" component={Referees} />
</Stack.Navigator>
 );
};
export default StackNavigator;