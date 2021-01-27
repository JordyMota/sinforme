import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    position: relative;
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 24;
    color: #000;
    font-weight: bold;
    max-width: 90%;
    margin: 0 5%;
    text-align: center;
`;

export const Descript = styled.Text`
    font-size: 21;
    color: #000;
    margin: 14px 0 22px;
    padding: 0 16px;
`;

export const BottomContainer = styled.View`
    padding: 18px 16px 22px;
    border-top-width: 1px;
    border-top-color: #1B2431;
`;

export const CheckItem = styled.View`
    width: 22px;
    height: 22px;
    border-radius: 6px;
    border: 1px solid #1B2431;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${(props)=>props.checked ? '#1B2431' : '#fff'};
`;

export const CheckText = styled.Text`
    margin-left: 14px;
    font-size: 18;
    font-weight: bold;
    color: #000;
`;

export const CheckButton = styled.TouchableOpacity`
    margin-top: 16px;
    width: 100%;
    border-radius: 5px;
    background-color: #1B2431;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextError = styled.Text`
    font-size: 17;
    font-weight: bold;
    color: #f73d43;
    width: 90%;
    max-width: 90%;
    margin: 0 5%;
    text-align: center;
`;