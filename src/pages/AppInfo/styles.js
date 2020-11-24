import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    position: relative;
    background-color: #fff;
    align-items: center;
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

export const FirstArt = styled.View`
    position: absolute;
    border-radius: 70;
    background-color: #FFA62B;
    transform: rotate(24deg);
`;

export const SecondtArt = styled(FirstArt)`
    background-color: #75B3E7;
    transform: rotate(-5deg);
`;

export const OptionList = styled.View`
    width: 100%;
    margin-top: 24px;
    padding-left: 12px;
`;

export const OptionItem = styled.TouchableOpacity`
    width: 100%;
    padding: 14px 18px 14px 6px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: rgba(0, 0, 0, .2);
    border-bottom-width: 2px;
`;