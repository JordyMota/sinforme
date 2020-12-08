import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { MainInfoButton, MainInfoArt } from './styles';

export default function InfoButton(props) {
    const { width, height } = useWindowDimensions();
    const {
        customStyle={},
        titleStyle={},
        descriptStyle={},
        onclick=()=>{},
        noArt=false,
        title='',
        description='',
        keyItem='',
        even=false
    } = props;
    return (
        <MainInfoButton
            key={keyItem}
            style={{
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowOpacity: 0.7,
                shadowRadius: .2,
                elevation: 4,
                maxWidth: ((width / 100) * 50) - 36,
                ...customStyle
            }}
            even={even}
            onPress={onclick}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 'bold',
                    ...titleStyle
                }}
                allowFontScaling={true}
            >
                { title }
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '500',
                    ...descriptStyle
                }}
            >
                { description }
            </Text>
            {
                !noArt ? (
                    <>
                    <MainInfoArt />
                    <MainInfoArt second={true} />
                    </>
                ) : (<></>)
            }
        </MainInfoButton>
    );
}