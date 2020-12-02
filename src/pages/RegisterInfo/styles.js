import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    position: relative;
    padding: 0 16px;
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 28;
    color: #000;
    font-weight: bold;
    margin-top: 18px;
    padding: 0 10px;
`;

export const Descript = styled.Text`
    font-size: 21;
    color: #000;
    margin-top: 14px;
    padding: 0 10px;
`;

export const ScrollContainer = styled.ScrollView`
    background-color: #fff;
    flex: 1;
`;

export const SquareOne = styled.View`
    background-color: #75B3E7;
    border-radius: 24;
    transform: rotate(28deg);
    position: absolute;
    opacity: .9;
`;

export const SquareTwo = styled.View`
    background-color: #75B3E7;
    border-radius: 24;
    transform: rotate(6deg);
    position: absolute;
    opacity: .75;
`;

export const SquareThree = styled.View`
    background-color: #75B3E7;
    border-radius: 24;
    transform: rotate(-16deg);
    position: absolute;
    opacity: .65;
`;

export const SquareFour = styled.View`
    background-color: #75B3E7;
    border-radius: 24;
    transform: rotate(-38deg);
    position: absolute;
    opacity: .50;
`;