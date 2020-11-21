import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f5f8fa;
    position: relative;
`;

export const TopContainer = styled.View`
    width: 100%;
    background-color: #FFA62B;
    border-bottom-left-radius: 28px;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ScrollContainer = styled.ScrollView`
    background-color: transparent;
    flex: 1;
`;

export const MainView = styled.View`
    padding: 0 16px;
    width: 100%;
    align-items: center;
`;

export const TopHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const LightButton = styled.TouchableOpacity`
    flex: 1;
    padding: 10px 18px;
    border-radius: 8px;
    border: 2px solid #fff;
    margin-right: ${(props)=>props.lastItem ? '0px' : '20px'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

export const ButtonIcon = styled.Image`
    position: absolute;
    width: ${(props)=>props.lastItem ? '40px' : '43px'};
    height: ${(props)=>props.lastItem ? '40px' : '43px'};
    bottom: 6px;
    right: ${(props)=>props.lastItem ? '2px' : '8px'};
    transform: ${(props)=>props.lastItem ? 'rotate(24deg)' : 'rotate(0deg)'};
`;

export const FullSearchButton = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    margin-top: 28px;
    overflow: hidden;
    shadow-color: #000;
    shadow-offset: {width: 3, height: 3};
    shadow-opacity: 0.4;
    shadow-radius: 2;
    elevation: 1;
`;

export const FullSearchArt = styled.View`
    border-radius: 250;
    background-color: #75B3E7;
    position: absolute;
`;

export const FullSearchIcon = styled.Image`
    position: absolute;
    top: 10px;
    right: 22px;
`;