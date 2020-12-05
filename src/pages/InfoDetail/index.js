import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, ActivityIndicator, BackHandler, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
    Container, ScrollContainer, MainView, WhiteContent, Title, ImagePreview,
    GroupSubtitle, Descript, NoResult, DescriptContainer, ShowMoreButton,
    GroupTitle, ImageContainer, ImageFullContainer, ButtonClose, MainInfoList
} from './styles';
import Constants from "expo-constants";
import Accordeon from '../../components/Accordeon';
import HeaderDefault from '../../components/HeaderDefault';
import Button from '../../components/Button';
import InfoButton from '../../components/InfoButton';
import Api from '../../api'; 

export default function InfoDetailScreen({ navigation, route }) {
    const closeIcon = require('../../assets/close.png');
    const { width, height } = useWindowDimensions();
    const [infoDetail, setInfoDetail] = useState(null);
    const [isLoading, setLoad] = useState(false);
    const [showMore, setShowMore] = useState(true);
    const [fullImageVisible, setFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');
    const { from, info } = route.params;

    const listData = () => {
        if (!info) return;
        setLoad(true);
        Api.get('/info/'+info).then(res => {
            setLoad(false);
            if (!res?.data?._id) {
                setInfoDetail(null);
                return;
            }
            setInfoDetail(res.data);
        }).catch(err => {
            setLoad(false);
            setInfoDetail(null);
        });
    }

    const backAction = () => {
        navigation.pop();
        navigation.navigate(from, {});
        return true;
    };

    useEffect(()=> {
        navigation.setParams({});
        setLoad(false);
        setInfoDetail(null);
        setShowMore(false);
        setFullImage(false);
        setFullImageUrl('');
        listData();
        BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
            console.log('teste');
            BackHandler.removeEventListener('hardwareBackPress', backAction);
            setLoad(false);
            setInfoDetail(null);
            setShowMore(false);
        }
    }, []);

    return (
        <Container>
            <ScrollContainer alwaysBounceVertical={true} scrollEnabled={true}>
                <MainView style={{
                    minHeight: height - (Constants?.statusBarHeight ? Constants.statusBarHeight : 14),
                    marginTop: Constants?.statusBarHeight ? Constants.statusBarHeight : 14
                }}>
                    <HeaderDefault
                        onclick={() => {
                            navigation.pop();
                            navigation.navigate(from, {});
                        }}
                        text={'Detalhe da Informação'}
                    />
                    <WhiteContent>
                        {isLoading ? (
                            <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>
                                <ActivityIndicator color="#1B2431" size="large" />
                            </View>
                        ) : (
                            !infoDetail?._id ? (
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <NoResult>
                                        Não foi possível exibir os dados dessa informação. Por favor, tente novamente mais tarde!
                                    </NoResult>
                                </View>
                            ) : (
                                <>
                                <Title>
                                    {infoDetail.title}
                                </Title>
                                <DescriptContainer onPress={()=>setShowMore(!showMore)} unlimited={showMore}>
                                    <Descript>
                                        {infoDetail.descript}
                                    </Descript>
                                    <ShowMoreButton>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>
                                            { showMore ? 'Clique para mostrar menos texto' : 'Clique para mostrar o texto completo' }
                                        </Text>
                                    </ShowMoreButton>
                                </DescriptContainer>
                                {
                                    infoDetail?.steps?.length ? (
                                        <>
                                        <GroupTitle>
                                            Passo a Passo
                                        </GroupTitle>
                                        <View>
                                            {
                                                infoDetail.steps.map((item, index) => (
                                                    <Accordeon
                                                        key={index}
                                                        itemKey={index}
                                                        title={`Passo ${index+1}`}
                                                        descript={item}
                                                    />
                                                ))
                                            }
                                        </View>
                                        </>
                                    ) : <></>
                                }
                                {
                                    infoDetail?.images?.length ? (
                                        <>
                                        <GroupTitle>
                                            Imagens
                                        </GroupTitle>
                                        <GroupSubtitle>
                                            Clique em uma imagem para visualiza-la
                                        </GroupSubtitle>
                                        {
                                            infoDetail.images.map((item, index) => (
                                                <ImageContainer onPress={()=>{
                                                    setFullImage(true);
                                                    setFullImageUrl(item);
                                                }}>
                                                    <ImagePreview
                                                        key={index}
                                                        source={{uri: item}}
                                                        resizeMode="cover"
                                                    />
                                                </ImageContainer>
                                            ))
                                        }
                                        </>
                                    ) : <></>
                                }
                                {
                                    infoDetail?.links?.length ? (
                                        <>
                                        <GroupTitle>
                                            Informações que podem te interessar
                                        </GroupTitle>
                                        <MainInfoList>
                                            {
                                            infoDetail.links.map((item, index) => (
                                                <InfoButton
                                                    key={item.infoId + index}
                                                    keyItem={item.infoId + index}
                                                    even={index%2 === 0}
                                                    title={item.title}
                                                    description={item.shortDescript}
                                                    onclick={()=> {
                                                        navigation.pop();
                                                        navigation.navigate('InfoDetail', {
                                                            info: item.infoId,
                                                            from
                                                        });
                                                    }}
                                                />
                                            ))
                                            }
                                        </MainInfoList>
                                        </>
                                    ) : <></>
                                }
                                <Button
                                    text={'Entendi'}
                                    customStyle={{ marginTop: 22 }}
                                    onclick={()=> {
                                        navigation.pop();
                                        navigation.navigate(from, {});
                                    }}
                                />
                                <Button
                                    text={'Preciso de Ajuda'}
                                    outline={true}
                                    customStyle={{ marginTop: 22 }}
                                    onclick={()=> {
                                        navigation.pop();
                                        navigation.navigate('Help', { from });
                                    }}
                                />
                                <View  style={{ width: '100%', height: 1, marginBottom: 40 }}/>
                                </>
                            )
                        )}
                    </WhiteContent>
                </MainView>
            </ScrollContainer>
            {
                fullImageVisible ? (
                    <ImageFullContainer style={{
                        width, height,
                        paddingTop: Constants?.statusBarHeight ? Constants.statusBarHeight : 14
                    }}>
                        <ButtonClose
                            style={{ top: Constants?.statusBarHeight ? Constants.statusBarHeight : 14 }}
                            onPress={()=>setFullImage(false)}
                        >
                            <Image
                                source={closeIcon}
                                style={{ width: 30, height: 30 }}
                            />
                        </ButtonClose>
                        <Image
                            source={{uri: fullImageUrl}}
                            style={{
                                width: (width/100)*90,
                                height: (height/100)*90
                            }}
                            resizeMode="cover"
                        />
                    </ImageFullContainer>
                ) : <></>
            }
            <StatusBar style="auto" />
        </Container>
    );
}