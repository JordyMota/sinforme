import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
    Container, TopContainer, ScrollContainer, MainView,
    TopHeader, LightButton, ButtonIcon, FullSearchButton,
    FullSearchArt, FullSearchIcon
} from './styles';

const logoWhite = require('../../assets/sinforme_icon_white.png');
const iconHelp = require('../../assets/help.png');
const iconInfoApp = require('../../assets/app_info.png');
const iconSearch = require('../../assets/search_alt.png');

export default function Home({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const [userData, setUserData] = useState(null);

    const storeData = async (val) => {
        try {
            await AsyncStorage.setItem('@first_access', val);
        } catch (e) {
            // saving error
        }
    }

    const getInfos = async () => {
        try {
            const userInfo = await AsyncStorage.getItem('@user_info');
            if (!userInfo) {
                setUserData(null);
                return;
            }
            setUserData(JSON.parse(userInfo));
        } catch (e) {
            // saving error
        }
    }

    const changeLog = () => {
        storeData(null);
        if (typeof route?.params?.logout === 'function') route.params.logout();
    }

    useEffect(()=> {
        setUserData({
            name: 'Jordy Mota'
        });
        navigation.setParams({});
        // getInfos();
    }, []);

    return (
        <Container>
            <TopContainer style={{ height: (height / 100) * 38 }}>
            </TopContainer>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true}>
                <MainView>
                    <TopHeader>
                        <Image
                            source={logoWhite}
                            style={{ marginRight: 16, width: 55, height: 55 }}
                        />
                        <View>
                            { userData?.name ? (
                                <Text style={{ fontSize: 16, color: '#fff', }} >
                                    Olá, {userData.name} 
                                </Text>
                            ) : <></>}
                            <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', }} >
                                Já sinformou hoje? 
                            </Text>
                        </View>
                    </TopHeader>
                    <View style={{ marginTop: 36, flexDirection: 'row' }}>
                        <LightButton>
                            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', }} >
                                Preciso de Ajuda
                            </Text>
                            <ButtonIcon
                                source={iconHelp}
                            />
                        </LightButton>
                        <LightButton lastItem={true}>
                            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', }} >
                                Informações do App
                            </Text>
                            <ButtonIcon
                                lastItem={true}
                                source={iconInfoApp}
                            />
                        </LightButton>
                    </View>
                    <FullSearchButton>
                        <View>
                            <Text style={{ fontSize: 22, color: '#000', fontWeight: 'bold', }} >
                                Buscar informações 
                            </Text>
                            <Text style={{ fontSize: 16, color: '#000', maxWidth: '70%' }} >
                                Clique aqui para nos dizer as informações que você quer saber 
                            </Text>
                        </View>
                        <FullSearchArt
                            style={{
                                width: (width / 100) * 58,
                                height: (width / 100) * 58,
                                top: ((width / 100)* 30)*(-1),
                                right: ((width / 100) * 26)*(-1)
                            }}
                        />
                        <FullSearchIcon
                            style={{
                                width: (width / 100) * 16,
                                height: (width / 100) * 16,
                            }}
                            source={iconSearch}
                        />
                    </FullSearchButton>
                </MainView>
            </ScrollContainer>
            {/* <StatusBar style="auto" /> */}
        </Container>
    );
}