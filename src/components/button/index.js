import React from 'react';
import { Container, ButtonText } from './styles';
import { ActivityIndicator } from 'react-native';

export default function ButtonDf(props) {
    const { text='', outline=false, customStyle={}, textStyle={}, onclick=()=>{}, loading=false } = props;
    return (
        <Container outline={outline} style={customStyle} onPress={onclick} disabled={loading}>
            {
                loading ? (
                    <ActivityIndicator color={outline ? '#1B2431' : '#FFFFFF'} />
                ) : (
                    <ButtonText outline={outline} style={textStyle}>
                        { text }
                    </ButtonText>
                )
            }
        </Container>
    );
}