import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Help from './pages/Help';
import AppInfo from './pages/AppInfo';
import RegisterInfo from './pages/RegisterInfo';
import Terms from './pages/Terms';
import Register from './pages/Register';

export default function Main() {
    const Stack = createStackNavigator();
    const [isLoading, setLoading] = useState(true);
    const [firstLogin, setFirstLogin] = useState(true);
    const getData = async () => {
        const value = await AsyncStorage.getItem('@first_access');
        setFirstLogin(!value);
        setLoading(false);
    }

    useEffect(()=> {
        getData();
    }, []);

    if (isLoading) return <SplashScreen />;
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'} initialRouteName={'Login'}>
                {
                    firstLogin ? (
                        <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            initialParams={{ login: ()=>setFirstLogin(false) }}
                        />
                        <Stack.Screen
                            name="RegisterInfo"
                            component={RegisterInfo}
                            initialParams={{ login: ()=>setFirstLogin(false) }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            initialParams={{ login: ()=>setFirstLogin(false) }}
                        />
                        </>
                    ) : (
                        <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            initialParams={{ logout: ()=>setFirstLogin(true) }}
                        />
                        <Stack.Screen
                            name="Search"
                            component={Search}
                            initialParams={{ logout: ()=>setFirstLogin(true) }}
                        />
                        <Stack.Screen
                            name="AppInfo"
                            component={AppInfo}
                            initialParams={{ logout: ()=>setFirstLogin(true) }}
                        />
                        </>
                    )
                }
                <Stack.Screen
                    name="Help"
                    component={Help}
                />
                <Stack.Screen
                    name="Terms"
                    component={Terms}
                    initialParams={{ login: ()=>setFirstLogin(false) }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}