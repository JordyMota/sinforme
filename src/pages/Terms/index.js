import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import {
    Container, Title, Descript, BottomContainer,
    CheckItem, CheckText, CheckButton, TextError
} from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';
import HeaderDefault from '../../components/HeaderDefault';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../api'; 

export default function TermsScreen({ navigation, route }) {
    const [checked, setChecked] = useState(false);
    const [errorText, setError] = useState(false);
    const [errorTextString, setErrorText] = useState('');
    const [loading, setLoad] = useState(false);
    const { width, height } = useWindowDimensions();
    const check = require('../../assets/check.png');
    const { from, origin, requireData=false, formParams=null } = route.params;

    const continueAction = async () => {
        if (!checked) {
            setError(true);
            setErrorText('Para continuar, leia e aceite os termos');
            setLoad(false);
            return;
        }
        setErrorText('');
        setError(false);
        setLoad(true);
        const getIn = async () => {
            await AsyncStorage.setItem('@first_access', 'true');
            setLoad(false);
            if (typeof route?.params?.login === 'function') route.params.login();
            navigation.navigate('Home', {});
        }
        if (requireData && formParams) {
            Api.post('/user', {
                ...formParams
            }).then(async res => {
                setLoad(false);
                if (!res?.data?._id) {
                    setError(true);
                    setErrorText('Serviço temporariamente indisponivel, tente novamente mais tarde');
                    return;
                }
                await AsyncStorage.setItem('@user_id', res.data._id);
                getIn();
            }).catch(err => {
                setLoad(false);
                setError(true);
                setErrorText('Serviço temporariamente indisponivel, tente novamente mais tarde');
            });
            return;
        }
        await getIn();
    }

    useEffect(() => {
        setChecked(false);
        setError(false);
        setLoad(false);
        setErrorText('');
    }, []);

    return (
        <View style={{ flex: 1,  backgroundColor: '#fff', maxHeight: height }}>
            <Container style={{ minHeight: height, maxHeight: height }}>
                <HeaderDefault
                    onclick={() => {
                        navigation.pop();
                        navigation.navigate(from, requireData ? {formParams} : {});
                    }}
                    text={'Termo do app'}
                    dark={true}
                    customStyle={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10 }}
                />
                <View style={{flex: 1, paddingHorizontal: 12, marginTop: 24}}>
                    <ScrollView style={{ flex: 1 }}>
                        <Title allowFontScaling={true}>
                            Esses são os termos de utilização do nosso aplicativo
                        </Title>
                        <Descript allowFontScaling={true}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Descript>
                    </ScrollView>
                </View>
                {
                    origin === 'out' ? (
                        <BottomContainer>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={()=>setChecked(!checked)}
                            >
                                <CheckItem checked={checked}>
                                    <Image
                                        source={check}
                                        style={{
                                            width: '50%',
                                            height: '50%',
                                        }}
                                    />
                                </CheckItem>
                                <CheckText allowFontScaling={true}>
                                    Eu li e aceito os termos de uso acima
                                </CheckText>
                            </TouchableOpacity>
                            {
                                errorText ? (
                                    <TextError>
                                        {errorTextString}
                                    </TextError>
                                ) : <></>
                            }
                            <CheckButton onPress={continueAction}>
                                {
                                    loading ? (
                                        <ActivityIndicator size={'small'} color={'#ffffff'} />
                                    ) : (
                                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
                                            Continuar
                                        </Text>
                                    )
                                }
                            </CheckButton>
                        </BottomContainer>
                    ) : <></>
                }
            </Container>
            <StatusBar style="auto" />
        </View>
    );
}