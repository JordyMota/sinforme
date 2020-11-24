import React from 'react';
import { Text, View, useWindowDimensions, Image } from 'react-native';
import { Container } from './styles';

export default function SplashScreen() {
    const { width, height } = useWindowDimensions();
    const brandWhite = require('../../assets/sinforme_logo_white.png');
    return (
        <Container>
            <Image
                source={brandWhite}
                style={{
                    width: (width/100)*40,
                    height: (((width/100)*40)/100)*45.16,
                }}
            />
        </Container>
    );
}