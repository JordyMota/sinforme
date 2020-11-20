import React from 'react';
import { Container, ButtonText } from './styles';

export default function SplashScreen(props) {
    const { text='', outline=false, customStyle={}, textStyle={}, onclick=()=>{} } = props;
    return (
        <Container outline={outline} style={customStyle} onPress={onclick}>
            <ButtonText outline={outline} style={textStyle}>
                { text }
            </ButtonText>
        </Container>
    );
}