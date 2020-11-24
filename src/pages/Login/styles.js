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

export const AppVersion = styled.Text`
    font-size: 16;
    color: #000;
    font-weight: bold;
    position: absolute;
    bottom: 12px;
`;

export const LinkItem = styled.Text`
    font-size: 14;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
`;

export const TextTutorialTitle = styled.Text`
    font-size: 17;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    transform: rotate(-20deg);
    max-width: 70%;
`;

export const LinkItemButton = styled.TouchableOpacity`
    padding: 6px 10px;
    margin-bottom: 15px;
    border: 1px solid ${(props)=>props.outline ? '#fff' : 'transparent'};
    margin-left: ${(props)=>props.last ? '12px' : '0px'};
    border-radius: 6px;
`;

export const LinksContainer = styled.View`
    transform: rotate(-20deg);
    flex-direction: row;
    ${(props)=>props.isRight ? 'padding-right: 60px;' : (props.isLast ? 'padding-left: 60px;' : 'padding-left: 35px;')};
    align-items: center;
    width: 100%;
    justify-content: ${(props)=>props.isRight ? 'flex-end' : 'flex-start'};
`;

export const TutorialContainerSmall = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    border-radius: 24;
    background-color: #FFA62B;
    transform: rotate(20deg);
    position: absolute;
    bottom: -20px;
    right: -20px;
    align-items: center;
    justify-content: center;
    elevation: 11;
`;

export const TutorialContainerSmallSecond = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 24;
    background-color: #FFA62B;
    transform: rotate(58deg);
    position: absolute;
    bottom: -16px;
    right: -16px;
    opacity: .75;
    elevation: 11;
`;

export const TutorialContainerSmallIcon = styled.Image`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    margin-right: 20px;
    transform: rotate(-20deg);
`;

export const TutorialContainerBig = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 24;
    background-color: #FFA62B;
    transform: rotate(20deg);
    position: absolute;
    bottom: -40px;
    right: -40px;
    align-items: center;
    justify-content: center;
    elevation: 11;
`;

export const TutorialContainerBigSecond = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 24;
    background-color: #FFA62B;
    transform: rotate(44deg);
    position: absolute;
    bottom: -40px;
    right: -40px;
    opacity: .75;
    elevation: 11;
`;

export const Overlay = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .4;
    elevation: 10;
`;