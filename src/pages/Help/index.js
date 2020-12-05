import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import { Container, Title, Descript, ScrollContainer, ButtonClose, FirstArt, SecondtArt, TextError } from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';
import Api from '../../api'; 

const closeIcon = require('../../assets/close.png');
const sentEmail = require('../../assets/email_sent.png');

export default function HelpScreen({ navigation, route }) {
    const [errorText, setError] = useState(false);
    const [errorTextString, setErrorText] = useState('');
    const [emailValue, setEmail] = useState('');
    const [nameValue, setName] = useState('');
    const [msgValue, setMsg] = useState('');
    const [loading, setLoad] = useState(false);
    const { width, height } = useWindowDimensions();
    const { from } = route.params;

    const continueAction = async () => {
        if (!emailValue || !nameValue || !msgValue) {
            setErrorText('Preencha os campos corretamente');
            setError(true);
            return;
        }
        setErrorText('');
        setError(false);
        setLoad(true);
        Api.post('/help', {
            mail: emailValue,
            name: nameValue,
            message: msgValue
        }).then(async res => {
            setLoad(false);
            navigation.pop();
            navigation.navigate('SuccessPage', {
                from,
                img: sentEmail,
                text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
                imgHeight: 68.37,
            });
        }).catch(err => {
            setLoad(false);
            setError(true);
            setErrorText('Serviço temporariamente indisponivel, tente novamente mais tarde');
        });
    }

    useEffect(() => {
        setError(false);
        setLoad(false);
        setErrorText('');
        setEmail('');
        setName('');
        setMsg('');
    }, []);

    return (
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true} style={{ minHeight: height }}>
                <Container style={{ minHeight: height }}>
                    <FirstArt
                        style={{
                            width: (width/100)*46,
                            height: (width/100)*46,
                            top: ((width/100)*10)*(-1),
                            left: ((width/100)*22)*(-1)
                        }}
                    />
                    <SecondtArt
                        style={{
                            width: (width/100)*90,
                            height: (width/100)*90,
                            bottom: ((width/100)*42)*(-1),
                            right: ((width/100)*38)*(-1)
                        }}
                    />
                    <Title style={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 30 }}>
                        Precisa de ajuda?{"\n"}Fale com a gente!
                    </Title>
                    <Descript>
                        Tem dúvida da utilização do app? Tem alguma sugestão? Viu algum erro? Ou qualquer outra coisa que queira falar. É só preencher as informações abaixo, enviar e aguardar que a gente entra em contato com você.
                    </Descript>
                    <Input
                        placeholder={'Seu Nome'}
                        onchange={({nativeEvent: {text}})=>setName(text)}
                        customStyle={{ marginTop: 24 }}
                        maxLength={75}
                        textContentType={'name'}
                    />
                    <Input
                        placeholder={'Seu E-mail'}
                        onchange={({nativeEvent: {text}})=>setEmail(text)}
                        customStyle={{ marginTop: 24 }}
                        maxLength={50}
                        textContentType={'emailAddress'}
                    />
                    <Input
                        placeholder={'Digite sua mensagem'}
                        onchange={({nativeEvent: {text}})=>setMsg(text)}
                        customStyle={{ marginTop: 24, marginBottom: errorText ? 10 : 0 }}
                        multiline={true}
                        maxLength={260}
                    />
                    {
                        errorText ? (
                            <TextError>
                                {errorTextString}
                            </TextError>
                        ) : <></>
                    }
                    <Button
                        text={'Enviar'}
                        customStyle={{ marginTop: 24 }}
                        loading={loading}
                        onclick={continueAction}
                    />
                    <Button
                        text={'Cancelar'}
                        outline={true}
                        customStyle={{ marginTop: 24 }}
                        onclick={()=>navigation.navigate(from, {})}
                        loading={loading}
                    />
                    <ButtonClose
                        disabled={loading}
                        style={{
                            top: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10
                        }}
                        onPress={()=> {
                            navigation.pop();
                            navigation.navigate(from, {});
                        }}
                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={closeIcon}
                        />
                    </ButtonClose>
                </Container>
            </ScrollContainer>
            <StatusBar style="auto" />
        </View>
    );
}