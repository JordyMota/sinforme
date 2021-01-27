import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { TopHeader } from './styles';

const arrowBack = require('../../assets/arrow_back.png');
const arrowBackDark = require('../../assets/arrow_back_dark.png');

export default function HeaderDefault(props) {
    const { text='', dark=false, customStyle={}, buttonStyle={}, textStyle={}, onclick=()=>{} } = props;
    return (
        <TopHeader style={{...customStyle}}>
            <TouchableOpacity
                style={{ width: 42, height: 42, padding: 4, ...buttonStyle }}
                onPress={onclick}
            >
                <Image
                    source={dark ? arrowBackDark : arrowBack}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
            <Text style={{ color: dark ? '#000' : '#fff', fontSize: 22, marginLeft: 22, fontWeight: 'bold', ...textStyle }}>
                { text }
            </Text>
        </TopHeader>
    );
}