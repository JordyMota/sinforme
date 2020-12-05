import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c6cacc;
    ${ props => !props.open ? 'max-height: 70px;' : '' }
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    justify-content: flex-start;
`;

export const Header = styled.View`
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    background-color: #f1f2f2;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
`;

export const Body = styled.View`
    width: 100%;
    padding: 16px;
`;

export const Descript = styled.Text`
    font-size: 19;
    color: #000;
`;

export const Title = styled.Text`
    font-size: 20;
    color: #000;
    font-weight: bold;
`;

export const Subitle = styled.Text`
    font-size: 16;
    color: #000;
`;

export const Arrow = styled.Image`
    width: 24;
    height: 24;
    ${ props => props.open ? 'transform: rotate(90deg);' : '' }
`;