import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Title, Descript, ScrollContainer, SquareOne, SquareTwo, SquareThree, SquareFour, TextError } from './styles';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import Input from '../../components/Input';
import Button from '../../components/Button';
import HeaderDefault from '../../components/HeaderDefault';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import format from 'date-fns/format';

export default function RegisterScreen({ navigation, route }) {
    const [name, setName] = useState('');
    const [bornDate, setDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [uf, setUf] = useState(null);
    const [errorText, setError] = useState(false);
    const [errorTextString, setErrorText] = useState('');
    const [pickerVisible, setShowPicker] = useState(false);
    const { width, height } = useWindowDimensions();
    const formPaper = require('../../assets/formPaper.png');

    const states = { AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins' };

    const getGender = (genderItem) => {
        switch(genderItem) {
            case 'male': return 'Masculino';
            case 'female': return 'Feminino';
            case 'other': return 'Outro';
            case 'notInformed': return 'Prefiro não informar';
            default: return '';
        }
    }

    const onchange = (evnt, date=null) => {
        if (!date) return;
        setDate(date);
        setShowPicker(false);
    }

    const handleSubmit = () => {
        if (!name || !bornDate || !gender || !uf) {
            setError(true);
            setErrorText('É obrigatório preencher os campos');
            return;
        }
        setError(false);
        setErrorText('');
        navigation.pop();
        navigation.navigate('Terms', {
            from: 'Register',
            origin: 'out',
            requireData: true,
            formParams: {
                name,
                bornDate,
                gender,
                uf
            }
        });
    }

    useEffect(() => {
        const { formParams=null } = route.params;
        setName(formParams?.name ? formParams.name : '');
        setDate(formParams?.bornDate ? formParams.bornDate : null);
        setGender(formParams?.gender ? formParams.gender : null);
        setUf(formParams?.uf ? formParams.uf : null);
        setShowPicker(false);
        setError(false);
        setErrorText('');
    }, []);

    return (
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true} style={{ minHeight: height }}>
                <Container style={{ minHeight: height }}>
                    <Image
                        source={formPaper}
                        style={{
                            width: (width/100)*45,
                            height: (((width/100)*45)/100)*89.22,
                            position: 'absolute',
                            top: 30,
                            right: -10
                        }}
                    />
                    <SquareFour
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            bottom: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareThree
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            bottom: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareTwo
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            bottom: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <SquareOne
                        style={{
                            width: (width/100)*45,
                            height: (width/100)*45,
                            bottom: -((width/100)*28),
                            right: -((width/100)*23)
                        }}
                    />
                    <HeaderDefault
                        onclick={() => {
                            navigation.pop();
                            navigation.navigate('RegisterInfo', {});
                        }}
                        text={'Vamos começar'}
                        dark={true}
                        customStyle={{ marginTop: (Constants?.statusBarHeight ? Constants.statusBarHeight : 14) + 10 }}
                    />
                    <Title>
                        So preencher e já foi
                    </Title>
                    <Descript>
                        Preencha os campos abaixo para proseguir para o app.
                    </Descript>
                    <Input
                        placeholder={'Digite como você quer ser chamado'}
                        onchange={({nativeEvent: {text}})=>setName(text)}
                        value={name}
                        hasValue={true}
                        customStyle={{ marginTop: 24 }}
                        maxLength={75}
                        textContentType={'name'}
                    />
                    <View style={{ position: 'relative' }}>
                        <Input
                            placeholder={'Selecione seu gênero'}
                            customStyle={{ marginTop: 24 }}
                            editable={false}
                            value={gender ? getGender(gender) : ''}
                            hasValue={true}
                            maxLength={50}
                        />
                        <Picker
                            selectedValue={gender}
                            style={{height: '100%', width: '100%', position: 'absolute', opacity: 0}}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Selecione um genero" value="" />
                            <Picker.Item label="Masculino" value="male" />
                            <Picker.Item label="Feminino" value="female" />
                            <Picker.Item label="Outro" value="other" />
                            <Picker.Item label="Prefiro não informar" value="notInformed" />
                        </Picker>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <Input
                            placeholder={'Selecione seu estado'}
                            customStyle={{ marginTop: 24 }}
                            editable={false}
                            value={uf ? states[uf] : ''}
                            hasValue={true}
                            maxLength={50}
                        />
                        <Picker
                            selectedValue={uf}
                            style={{height: '100%', width: '100%', position: 'absolute', opacity: 0}}
                            onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
                        >
                            {
                                Object.entries(states).map(([index, value]) => (
                                    <Picker.Item label={value} value={index} key={index} />
                                ))
                            }
                        </Picker>
                    </View>
                    <TouchableOpacity
                        onPress={()=>setShowPicker(true)}
                    >
                        <Input
                            placeholder={'Selecione sua data de nascimento'}
                            value={bornDate ? format(bornDate, "dd/MM/yyyy") : ''}
                            editable={false}
                            hasValue={true}
                            customStyle={{ marginTop: 24 }}
                            maxLength={200}
                        />
                    </TouchableOpacity>
                    {pickerVisible && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={bornDate || new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onchange}
                            maximumDate={new Date()}
                        />
                    )}
                    {
                        errorText ? (
                            <View style={{ marginTop: 20, width: '100%' }}>
                                <TextError>
                                    {errorTextString}
                                </TextError>
                            </View>
                        ) : <></>
                    }
                    <Button
                        text={'Continuar'}
                        customStyle={{ marginTop: 28 }}
                        onclick={handleSubmit}
                    />
                    <Button
                        text={'Cancelar'}
                        outline={true}
                        customStyle={{ marginTop: 18, marginBottom: 30 }}
                        onclick={() => {
                            navigation.pop();
                            navigation.navigate('RegisterInfo', {});
                        }}
                    />
                </Container>
            </ScrollContainer>
            <StatusBar style="auto" />
        </View>
    );
}