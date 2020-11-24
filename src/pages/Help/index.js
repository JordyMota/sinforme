import React from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import { Container, Title, Descript, ScrollContainer, ButtonClose, FirstArt, SecondtArt } from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';

const closeIcon = require('../../assets/close.png');

export default function HelpScreen({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const { from } = route.params;
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
                        onclick={()=>navigation.navigate(from, {})}
                    />
                    <ButtonClose
                        style={{
                            top: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10
                        }}
                        onPress={()=>navigation.navigate(from, {})}
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