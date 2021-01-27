import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #75B3E7;
    position: relative;
`;

export const ScrollContainer = styled.ScrollView`
    background-color: transparent;
    flex: 1;
`;

export const MainView = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

export const SearchCotainer = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-top: 24px;
`;

export const WhiteContent = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 24;
    border-top-right-radius: 24;
    padding: 0 16px;
    margin-top: 28px;
`;

export const MainInfoTitle = styled.Text`
    width: 100%;
    font-size: 22;
    color: #000;
    margin-top: 20px;
    font-weight: bold;
    padding: 0 8px;
`;

export const MainInfoList = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4px;
    margin-bottom: 40px;
    justify-content: flex-start;
`;