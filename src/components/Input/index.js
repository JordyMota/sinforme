import React from 'react';
import { Image } from 'react-native';
import { InputContainer, InputItem } from './styles';
import InsetShadow from 'react-native-inset-shadow';

export default function Input(props) {
    const { customStyle={}, inputStyle={}, onchange=(evn)=>{}, placeholder='', multiline=false, numberOfLines=5, maxLength } = props;
    return (
        <InputContainer
            multiline={multiline}
            style={{ ...customStyle }}
        >
            <InsetShadow elevation={4}>
                <InputItem
                    style={{textAlignVertical: 'top', ...inputStyle}}
                    onChange={evnt => onchange(evnt)}
                    placeholder={placeholder}
                    placeholderTextColor='rgba(0,0,0,.45)'
                    multiline={multiline}
                    {...(numberOfLines ? {numberOfLines} : {})}
                    {...(maxLength ? {maxLength} : {})}
                />
            </InsetShadow>
        </InputContainer>
    );
}