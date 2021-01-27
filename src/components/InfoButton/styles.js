import styled from 'styled-components/native';

export const MainInfoButton = styled.TouchableOpacity`
    flex: 1;
    padding: 10px 12px;
    flex-basis: 40%;
    background-color: #fff;
    border-radius: 12px;
    margin-right: ${(props) => props.even ? '20px' : '0px'};
    margin-top: 20px;
    position: relative;
    overflow: hidden;
`;

export const MainInfoArt = styled.View`
    position: absolute;
    top: ${(props) => props.second ? '-12px' : '-15px'};
    right: ${(props) => props.second ? '-14px' : '-2px'};
    width: 36px;
    height: 36px;
    border-radius: 18;
    background-color: ${(props) => props.second ? '#1B2431' : '#75B3E7'};
`;