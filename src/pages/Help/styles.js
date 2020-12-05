import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    position: relative;
    padding: 0 16px;
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 30;
    color: #000;
    font-weight: bold;
`;

export const Descript = styled.Text`
    font-size: 21;
    color: #000;
    margin-top: 14px;
`;

export const ScrollContainer = styled.ScrollView`
    background-color: #fff;
    flex: 1;
`;

export const ButtonClose = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    padding: 12px;
    position: absolute;
    right: 16px;
`;

export const FirstArt = styled.View`
    position: absolute;
    border-radius: 250;
    background-color: #FFA62B;
`;

export const SecondtArt = styled(FirstArt)`
    background-color: #75B3E7;
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