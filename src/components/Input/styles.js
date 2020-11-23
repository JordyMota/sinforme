import styled from 'styled-components/native';

export const InputContainer = styled.View`
    background-color: #ddd;
    border-color: white;
    overflow: hidden;
    border-radius: 8;
    width: 100%;
    ${(props) => props.multiline ? 'max-height: 130px;' : 'height: 55px;'}
`;

export const InputItem = styled.TextInput`
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 18;
    color: #000;
    font-weight: bold;
    padding-left: 12px;
    padding-right: 12px;
`;