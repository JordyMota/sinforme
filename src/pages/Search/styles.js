import styled from 'styled-components/native';
import Constants from "expo-constants";

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
    margin-top: ${Constants?.statusBarHeight ? Constants.statusBarHeight + 26 : 38}px;
`;

export const SearchItem = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 8;
    padding: 10px 12px;
`;

export const WhiteContent = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 24;
    border-top-right-radius: 24;
    padding: 0 16px;
    margin-top: 34px;
`;