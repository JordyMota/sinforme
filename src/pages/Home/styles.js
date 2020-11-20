import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f5f8fa;
    align-items: center;
`;

export const TopContainer = styled.View`
    width: 100%;
    background-color: #75B3E7;
    border-bottom-right-radius: 28px;
    border-bottom-left-radius: 28px;
    align-items: center;
    justify-content: center;
`;

export const MiddleContainer = styled.View`
    padding: 20px;
    background-color: #fff;
    border-radius: 24px;
    shadow-color: #000;
    shadow-offset: {width: 3, height: 3};
    shadow-opacity: 0.4;
    shadow-radius: 2;
    elevation: 1;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 34;
    color: #000;
    font-weight: bold;
`;

export const Descript = styled.Text`
    font-size: 19;
    color: #000;
    margin-top: 12px;
`;