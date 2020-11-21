import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Container, TopContainer, MiddleContainer, Title, Descript } from './styles';
import ButtonFull from '../../components/Button';

export default function Login({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const brandWhite = require('../../assets/sinforme_logo_white.png');

    useEffect(()=> {
        navigation.setParams({});
    }, []);

    const storeData = async (val) => {
        try {
            await AsyncStorage.setItem('@first_access', val);
        } catch (e) {
            // saving error
        }
    }

    const changeLog = () => {
        storeData('true');
        if (typeof route?.params?.login === 'function') route.params.login();
    }

    return (
        <Container>
            <TopContainer style={{ height: (height / 100) * 44 }}>
                <Image
                    source={brandWhite}
                    style={{
                        width: (width/100)*48,
                        height: (((width/100)*48)/100)*45.16,
                        marginTop: ((height / 100) * 8) * (-1),
                    }}
                />
            </TopContainer>
            <MiddleContainer style={{
                width: (width / 100) * 90,
                marginTop: ((height / 100) * 10) * (-1),
                minHeight: (height / 100) * 16,
            }}>
                <Title>
                    Bem vindo
                </Title>
                <Descript>
                    Aqui você encontrará as informações nescessarias para poder aprender tirar suas duvidas sobre diversos assuntos e novidades do mundo moderno.
                </Descript>
                <ButtonFull
                    text={'Começar'}
                    customStyle={{ marginTop: 34 }}
                    onclick={changeLog}
                />
            </MiddleContainer>
            <ButtonFull
                text={'Preciso de ajuda'}
                customStyle={{ marginTop: 20, width: ((width / 100) * 90) - 40 }}
                outline={true}
                onclick={()=>{}}
            />
            <StatusBar style="auto" />
        </Container>
    );
}