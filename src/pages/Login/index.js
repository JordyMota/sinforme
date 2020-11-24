import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
    Container, TopContainer, MiddleContainer, Title, Descript, AppVersion,
    LinkItem, TutorialContainerSmall, TutorialContainerSmallSecond, Overlay,
    TutorialContainerSmallIcon, TutorialContainerBig, TutorialContainerBigSecond,
    LinkItemButton, LinksContainer, TextTutorialTitle
} from './styles';
import ButtonFull from '../../components/Button';
let appJson = require('../../../app.json');
let iconTutorial = require('../../assets/tutorial.png');

export default function LoginScreen({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const [showTutorialOption, setShowOption] = useState(true);
    const [showTutorialChip, setShowChip] = useState(false);
    const brandWhite = require('../../assets/sinforme_logo_white.png');

    const handleNotVisible = async () => {
        const setTutorialInvisible = await AsyncStorage.getItem('@tutorial_not_visible');
        if (setTutorialInvisible === 'true') setShowOption(false);
    }

    useEffect(()=> {
        navigation.setParams({});
        setShowOption(true);
        setShowChip(false);
        handleNotVisible();
    }, []);

    const storeData = async (val) => {
        try {
            await AsyncStorage.setItem('@first_access', val);
        } catch (e) {
        }
    };

    const hideTutorial = async () => {
        await AsyncStorage.setItem('@tutorial_not_visible', 'true');
    };

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
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowOpacity: 0.7,
                shadowRadius: .2,
                elevation: 4,
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
                onclick={()=>navigation.navigate('Help', {from: 'Login'})}
            />
            {
                showTutorialOption ? (
                    <>
                    <TutorialContainerSmallSecond />
                    <TutorialContainerSmall onPress={() => {
                        setShowOption(false);
                        setShowChip(true);
                    }}>
                        <TutorialContainerSmallIcon source={iconTutorial} />
                    </TutorialContainerSmall>
                    </>
                ) : <></>
            }
            {
                showTutorialChip ? (
                    <>
                    <Overlay
                        style={{ width, height }}
                        onPress={() => {
                            setShowOption(true);
                            setShowChip(false);
                        }}
                    />
                    <TutorialContainerBigSecond />
                    <TutorialContainerBig>
                        <TextTutorialTitle>
                            Deseja ver o tutorial novamente?
                        </TextTutorialTitle>
                        <LinksContainer>
                            <LinkItemButton
                                outline={true}
                                onPress={() => {
                                    setShowOption(false);
                                    setShowChip(false);
                                }}
                            >
                                <LinkItem>
                                    Ver tutorial
                                </LinkItem>
                            </LinkItemButton>
                        </LinksContainer>
                        <LinksContainer isRight={true}>
                            <LinkItemButton
                                outline={true}
                                last={true}
                                onPress={() => {
                                    setShowOption(true);
                                    setShowChip(false);
                                }}
                            >
                                <LinkItem>
                                    Agora não
                                </LinkItem>
                            </LinkItemButton>
                        </LinksContainer>
                        <LinksContainer isLast={true}>
                            <LinkItemButton
                                outline={true}
                                style={{ marginBottom: 0 }}
                                onPress={() => {
                                    setShowOption(false);
                                    setShowChip(false);
                                    hideTutorial();
                                }}
                            >
                                <LinkItem>
                                    Não quero
                                </LinkItem>
                            </LinkItemButton>
                        </LinksContainer>
                    </TutorialContainerBig>
                    </>
                ) : <></>
            }
            {
                appJson?.expo?.version ? (
                    <AppVersion>
                        Versão {appJson.expo.version}
                    </AppVersion>
                ) : <></>
            }
            <StatusBar style="auto" />
        </Container>
    );
}