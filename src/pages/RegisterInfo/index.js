import React from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import { Container, Title, Descript, ScrollContainer, SquareOne, SquareTwo, SquareThree, SquareFour } from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';
import HeaderDefault from '../../components/HeaderDefault';

export default function RegisterInfoScreen({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const womenData = require('../../assets/data_women.png');
    return (
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true} style={{ minHeight: height }}>
                <Container style={{ minHeight: height }}>
                    <Image
                        source={womenData}
                        style={{
                            width: (width/100)*80,
                            height: (((width/100)*80)/100)*84.629,
                            position: 'absolute',
                            bottom: 30,
                            right: -70
                        }}
                    />
                    <SquareFour
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            top: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareThree
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            top: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareTwo
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            top: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareOne
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            top: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <HeaderDefault
                        onclick={()=>navigation.navigate('Login', {})}
                        text={'Vamos começar'}
                        dark={true}
                        customStyle={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10 }}
                    />
                    <Title>
                        Mas antes bora{"\n"}conversar um pouco
                    </Title>
                    <Descript>
                        A gente vai pedir algumas informações sua, e vamos usar essas informações pra colocar você em um grupo, e como muitos outros apps fazem e nem te falam queremos vender para outras empresas coisas que esse grupo gosta, mas relaxa que não vamos divulgar nenhuma informação sensivel, como seu nome ou seus documentos. Não cobramos nada de você, e não vamos te obrigar a passar suas informações, então se não se sentir a vontade em liberar esses dados pra gente só clicar no botão "Continuar sem dados", e usar o app normalmente.
                    </Descript>
                    <Button
                        text={'Continuar'}
                        customStyle={{ marginTop: ((((width/100)*80)/100)*84.629)-210 }}
                    />
                    <Button
                        text={'Continuar sem dados'}
                        outline={true}
                        customStyle={{ marginTop: 24 }}
                        onclick={()=>navigation.navigate(from, {})}
                    />
                </Container>
            </ScrollContainer>
            <StatusBar style="auto" />
        </View>
    );
}