import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import {
    Container, Title, Descript, ScrollContainer, ButtonClose,
    FirstArt, SecondtArt, OptionList, OptionItem
} from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';
import HeaderDefault from '../../components/HeaderDefault';
import AsyncStorage from '@react-native-async-storage/async-storage';
let appJson = require('../../../app.json');

export default function AppInfo({ navigation, route }) {
    const girl = require('../../assets/girl_running.png');
    const logout = require('../../assets/logout.png');
    const help = require('../../assets/help_alt.png');
    const chevron = require('../../assets/chevron.png');
    const sinformeLogo = require('../../assets/sinforme_logo.png');

    const { width, height } = useWindowDimensions();

    const storeData = async () => {
        await AsyncStorage.removeItem('@first_access');
        await AsyncStorage.removeItem('@user_id');
        if (typeof route?.params?.logout === 'function') route.params.logout();
        navigation.navigate('Login', {});
    }

    const logoutAction = () => {
        storeData();
    }

    useEffect(()=> {
        navigation.setParams({});
    }, []);

    return (
        <View style={{ flex: 1,  backgroundColor: '#fff', minHeight: height }}>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true} style={{ minHeight: height }}>
                <Container style={{ minHeight: height }}>
                    <HeaderDefault
                        onclick={()=> {
                            navigation.pop();
                            navigation.navigate('Home', {});
                        }}
                        text={'Informações do App'}
                        dark={true}
                        customStyle={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10 }}
                    />
                    <FirstArt
                        style={{
                            width: (width/100)*55,
                            height: (width/100)*55,
                            bottom: ((width/100)*35)*(-1),
                            left: ((width/100)*25)*(-1)
                        }}
                    />
                    <SecondtArt
                        style={{
                            width: (width/100)*70,
                            height: (width/100)*70,
                            bottom: ((width/100)*59)*(-1),
                            right: ((width/100)*8)*(-1)
                        }}
                    />
                    {(height >= 560) ? (
                        <Image
                            style={{
                                width: (width/100)*40,
                                height: (((width/100)*40)/100)*126.6,
                                bottom: ((width/100)*9),
                                left: ((width/100)*24),
                                position: 'absolute'
                            }}
                            source={girl}
                        />
                    ) : <></>}
                    <OptionList style={ (height <= 593) ? { marginTop: 10 } : {} }>
                        <OptionItem
                            onPress={()=> {
                                navigation.pop();
                                navigation.navigate('Help', { from: 'AppInfo' });
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={help}
                                    style={{ width: 34, height: 34, marginRight: 12 }}
                                />
                                <View>
                                    <Text
                                        style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}
                                        allowFontScaling={true}
                                    >
                                        Preciso de ajuda
                                    </Text>
                                    <Text
                                        style={{ fontSize: 16, color: '#000' }}
                                    >
                                        Clique para ir a tela de ajuda
                                    </Text>
                                </View>
                            </View>
                            <Image
                                style={{ width: 14, height: 14 }}
                                source={chevron}
                            />
                        </OptionItem>
                        <OptionItem onPress={logoutAction}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={logout}
                                    style={{ width: 34, height: 34, marginRight: 12 }}
                                />
                                <View>
                                    <Text
                                        style={{ fontSize: 18, color: '#f73d43', fontWeight: 'bold' }}
                                        allowFontScaling={true}
                                    >
                                        Sair do app
                                    </Text>
                                    <Text
                                        style={{ fontSize: 16, color: '#000' }}
                                    >
                                        Clique para sair desse app
                                    </Text>
                                </View>
                            </View>
                            <Image
                                style={{ width: 14, height: 14 }}
                                source={chevron}
                            />
                        </OptionItem>
                    </OptionList>
                    <Image
                        style={{
                            width: (width/100)*34,
                            height: (((width/100)*34)/100)*43,
                            marginTop: (height <= 593) ? 10 : 22
                        }}
                        source={sinformeLogo}
                    />
                    {
                        appJson?.expo?.version ? (
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    color: '#000',
                                    marginTop: (height <= 593) ? 5 : 8
                                }}
                                allowFontScaling={true}
                            >
                                Versão {appJson.expo.version}
                            </Text>
                        ) : <></>
                    }
                </Container>
            </ScrollContainer>
            <StatusBar style="auto" />
        </View>
    );
}