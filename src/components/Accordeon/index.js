import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Container, Header, Body, Descript, Title, Subitle, Arrow } from './styles';

export default function ButtonDf(props) {
    const [open, setOpen] = useState(false);
    const { width, height } = useWindowDimensions();
    const { title='', descript='', customStyle={}, startOpen=false, itemKey } = props;
    const chevron = require('../../assets/chevron.png');

    useEffect(()=> {
        setOpen(startOpen);
    }, []);

    return (
        <Container
            open={open}
            style={customStyle}
            onPress={()=>setOpen(!open)}
            key={itemKey}
        >
            <Header>
                <View>
                    <Title>
                        {title}
                    </Title>
                    <Subitle>
                        {open ? 'Clique para ver esse passo' : 'Clique se quiser esconder esse passo'}
                    </Subitle>
                </View>
                <Arrow
                    open={open}
                    source={chevron}
                />
            </Header>
            <Body>
                <Descript allowFontScaling={true}>
                    {descript}
                </Descript>
            </Body>
        </Container>
    );
}