import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Main() {
    const Stack = createStackNavigator();
    const [isLoading, setLoading] = useState(true);
    const [firstLogin, setFirstLogin] = useState(true);
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@first_access')
            setFirstLogin(!value);
            setLoading(false);
        } catch(e) {
            setFirstLogin(true);
            setLoading(false);
        }
    }

    useEffect(()=> {
        getData();
    }, []);

    if (isLoading) return <SplashScreen />;
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'} initialRouteName={firstLogin ? 'Login' : 'Home'}>
                {
                    firstLogin ? (
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            initialParams={{ login: ()=>setFirstLogin(false) }}
                        />
                    ) : (
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            initialParams={{ logout: ()=>setFirstLogin(true) }}
                        />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}