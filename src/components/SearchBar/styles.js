import styled from 'styled-components/native';

export const SearchItem = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 8;
    padding: 12px 16px;
`;

export const SearchTitle = styled.Text`
    color: rgba(0, 0, 0, .8);
    font-size: 18;
    margin-left: 4;
    font-weight: bold;
`;

export const SearchInputContainer = styled.View`
    width: 100%;
    position: relative;
    background-color: #ddd;
    border-radius: 8px;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`;

export const SearchInput = styled.TextInput`
    height: 40;
    flex: 1;
    font-size: 17;
    font-weight: bold;
    padding-left: 14px;
    padding-right: 46px;
`;

export const SearchIcon = styled.View`
    width: 40px;
    height: 40px;
    padding: 6px;
    position: absolute;
    right: 4;
`;