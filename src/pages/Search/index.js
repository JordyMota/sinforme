import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
    Container, SearchCotainer, ScrollContainer, MainView,
    WhiteContent, SearchItem,
} from './styles';
import InfoButton from '../../components/InfoButton';

const mainInfos = [
    {
        id: '_a1',
        title: 'Fazer transferência',
        description: 'Clique aqui para saber mais sobre transferências de dinheiro online'
    },
    {
        id: '_a2',
        title: 'Apagar foto facebook',
        description: 'Clique aqui para saber mais sobre apagar publicações do facebook'
    },
    {
        id: '_a3',
        title: 'Assistir Novelas Antigas',
        description: 'Clique aqui para saber mais sobre como assistir novelas antigas'
    },
    {
        id: '_a4',
        title: 'Baixar anti virus',
        description: 'Clique aqui para saber mais sobre como baixar anti virus'
    },
];

export default function Search({ navigation, route }) {
    const { width, height } = useWindowDimensions();

    const storeData = async (val) => {
        try {
            await AsyncStorage.setItem('@first_access', val);
        } catch (e) {
            // saving error
        }
    }

    const changeLog = () => {
        storeData(null);
        if (typeof route?.params?.logout === 'function') route.params.logout();
    }

    useEffect(()=> {
        navigation.setParams({});
        // getInfos();
    }, []);

    return (
        <Container>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true}>
                <MainView style={{ minHeight: height }} >
                    <SearchCotainer>
                        <SearchItem></SearchItem>
                    </SearchCotainer>
                    <WhiteContent></WhiteContent>
                </MainView>
            </ScrollContainer>
            <StatusBar style="auto" />
        </Container>
    );
}