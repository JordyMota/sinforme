import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Container, Title, Descript, ScrollContainer } from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SplashScreen() {
    const { width, height } = useWindowDimensions();
    return (
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true}>
                <Container>
                    <Title style={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 30 }}>
                        Precisa de ajuda?{"\n"}Fale com a gente!
                    </Title>
                    <Descript>
                        Tem dúvida da utilização do app? Tem alguma sugestão? Viu algum erro? Ou qualquer outra coisa que queira falar. É só preencher as informações abaixo, enviar e aguardar que a gente entra em contato com você.
                    </Descript>
                    <Input
                        placeholder={'Seu Nome'}
                        onchange={(evnt)=>{}}
                        customStyle={{ marginTop: 24 }}
                        maxLength={75}
                    />
                    <Input
                        placeholder={'Seu E-mail'}
                        onchange={(evnt)=>{}}
                        customStyle={{ marginTop: 24 }}
                        maxLength={50}
                    />
                    <Input
                        placeholder={'Digite sua mensagem'}
                        onchange={(evnt)=>{}}
                        customStyle={{ marginTop: 24 }}
                        multiline={true}
                        maxLength={260}
                    />
                    <Button
                        text={'Enviar'}
                        customStyle={{ marginTop: 24 }}
                    />
                    <Button
                        text={'Cancelar'}
                        outline={true}
                        customStyle={{ marginTop: 24 }}
                    />
                </Container>
            </ScrollContainer>
            <StatusBar style="auto" />
        </View>
    );
}