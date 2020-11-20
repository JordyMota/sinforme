import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${(props)=>props.outline ? 'transparent' : '#1B2431'};
    border: 1px solid #1B2431;
`;

export const ButtonText = styled.Text`
    font-size: 20;
    color: ${(props)=>props.outline ? '#1B2431' : '#fff'};
    font-weight: bold;
    text-transform: uppercase;
`;