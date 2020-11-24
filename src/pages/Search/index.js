import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
    Container, SearchCotainer, ScrollContainer, MainView,
    WhiteContent, MainInfoTitle, MainInfoList
} from './styles';
import Constants from "expo-constants";
import InfoButton from '../../components/InfoButton';
import HeaderDefault from '../../components/HeaderDefault';
import SearchBar from '../../components/SearchBar';

const infoListFull = [
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
    {
        id: '_a5',
        title: 'Limpar lixo celular',
        description: 'Clique aqui para saber mais sobre como limpar o lixo do celular'
    },
    {
        id: '_a6',
        title: 'Assinar Netflix',
        description: 'Clique aqui para saber mais sobre como assinar a Netflix'
    },
    {
        id: '_a7',
        title: 'Salvar fotos na nuvem',
        description: 'Clique aqui para saber mais sobre como salvar suas fotos na nuvem'
    },
    {
        id: '_a8',
        title: 'Limpar espaço no Whatsapp',
        description: 'Clique aqui para saber mais sobre como limpar espaço no seu Whatsapp'
    },
];

export default function SearchScreen({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const [infoList, setInfoList] = useState([]);

    useEffect(()=> {
        navigation.setParams({});
        // setInfoList([]);
        setInfoList(infoListFull);
    }, []);

    return (
        <Container>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true}>
                <MainView style={{
                    minHeight: height - (Constants?.statusBarHeight ? Constants.statusBarHeight : 14),
                    marginTop: Constants?.statusBarHeight ? Constants.statusBarHeight : 14
                }}>
                    <HeaderDefault
                        onclick={()=>navigation.navigate('Home', {})}
                        text={'Buscar informações'}
                    />
                    <SearchCotainer>
                        <SearchBar
                            title={'Digite a informação que deseja saber'}
                            placeholder={'Ex.. Fazer transferência'}
                        />
                    </SearchCotainer>
                    <WhiteContent>
                        <MainInfoTitle>
                            Informações
                        </MainInfoTitle>
                        <MainInfoList>
                            {
                                infoList.map((item, index) => (
                                    <InfoButton
                                        key={item.id + index}
                                        keyItem={item.id + index}
                                        even={index%2 === 0}
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))
                            }
                        </MainInfoList>
                    </WhiteContent>
                </MainView>
            </ScrollContainer>
            <StatusBar style="auto" />
        </Container>
    );
}