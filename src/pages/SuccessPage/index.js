import React from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import { Container, Title } from './styles';
import Button from '../../components/Button';

export default function SuccessPageScreen({ navigation, route }) {
    const { from, text='', img, fromParams={}, imgHeight=1 } = route.params;
    const { width, height } = useWindowDimensions();
    return (
        <Container>
            <Image
                source={img}
                style={{
                    width: (width/100)*68,
                    height: (((width/100)*68)/100)*imgHeight,
                }}
                resizeMode="cover"
            />
            <Title allowFontScaling={true}>
                {text}
            </Title>
            <Button
                text={'OK'}
                customStyle={{ marginTop: 22, width: '40%' }}
                onclick={()=>navigation.navigate(from, fromParams)}
            />
        </Container>
    );
}