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

export const WhiteContent = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-top-right-radius: 24;
    padding: 0 16px;
    margin-top: 14px;
`;

export const NoResult = styled.Text`
    font-size: 20;
    font-weight: bold;
    margin-top: 35;
    color: #000;
    color: .8;
`;

export const Title = styled.Text`
    font-size: 28;
    font-weight: bold;
    margin-top: 20;
    color: #000;
`;

export const DescriptContainer = styled.TouchableOpacity`
    width: 100%;
    ${(props) => props.unlimited ? '' : 'max-height: 300;'}
    padding-bottom: 42;
    overflow: hidden;
    position: relative;
`;

export const ShowMoreButton = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #1B2431;
    border-top-left-radius: 27;
    border-top-right-radius: 4;
    border-bottom-left-radius: 4;
    padding: 12px 24px;
`;

export const Descript = styled.Text`
    font-size: 20;
    margin-top: 16;
    color: #000;
`;

export const GroupTitle = styled.Text`
    width: 100%;
    font-size: 22;
    color: #000;
    margin-top: 22px;
    font-weight: bold;
`;

export const GroupSubtitle = styled.Text`
    width: 100%;
    font-size: 17;
    color: #000;
    margin-top: 1px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    border: 2px solid #1B2431;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 28px;
`;

export const ImagePreview = styled.Image`
    width: 100%;
    height: 100;
`;

export const ImageFullContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    elevation: 30;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonClose = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border-bottom-left-radius: 120px;
    border-top-right-radius: 40px;
    elevation: 31;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 3px 3px;
`;

export const MainInfoList = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: flex-start;
`;