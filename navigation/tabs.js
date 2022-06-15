import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigators';
import FixturesScreen from '../screens/Fixtures';
import HomeScreen from '../screens/Home';
import MoreScreen from '../screens/More';
import ResultsScreen from '../screens/Results';
import StatsScreen from '../screens/Stats';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#48234E',
                    borderRadius: 35,
                    height: 60,
                    width: '90%',
                }
            }}
        >
            <Tab.Screen  
                name='Ligi kuu ya NBC' 
                component={HomeScreen} 
                backgroundColor='#087A43'
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Home.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    marginLeft: 10,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text  style={{
                                    width:29,
                                    height: 25,
                                    marginLeft: 10,
                                    tintColor: focused ? '#e32f45' : '#f0f'
                                }}
                            >HOME</Text>
                        </View>
                    ),
                }} 
            />
            <Tab.Screen 
                name='Fixtures' 
                component={FixturesScreen}  
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Fixtures.png')}
                                resizeMode='contain'
                                style={{
                                    width:50,
                                    height: 25,
                                    marginLeft: 20,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text  style={{
                                    width:55,
                                    height: 25,
                                    marginLeft: 20,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            >FIXTURES</Text>
                        </View>
                    ),
                }} 
            />
            <Tab.Screen 
                name='Results' 
                component={ResultsScreen}  
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Results.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    marginLeft: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text  style={{
                                    width:45,
                                    height: 25,
                                    marginLeft: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            >RESULTS</Text>
                        </View>
                    ),
                }} 
            />
            <Tab.Screen 
                name='Statistics' 
                component={StatsScreen}  
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Stats.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    marginLeft: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text  style={{
                                    width:35,
                                    height: 25,
                                    marginLeft: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            >STATS</Text>
                        </View>
                    ),
                }} 
            />
            <Tab.Screen 
                name='More' 
                component={MoreScreen}  
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/More.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    marginLeft: 10,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text  style={{
                                    width:30,
                                    height: 25,
                                    marginLeft: 10,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            >MORE</Text>
                        </View>
                    ),
                }} 
            />
           <Tab.Screen 
                name='Sign In'
                component={StackNavigator}
                options=
                {{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}/>
                    ),
                }}
            />
            <Tab.Screen 
                name='Sign Up'
                component={StackNavigator}
                options=
                {{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center' , justifyContent: 'center', top: 10}}/>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;