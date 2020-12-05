import React, { useState, useEffect } from 'react';
import { Text, View, useWindowDimensions, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
    Container, SearchCotainer, ScrollContainer, MainView,
    WhiteContent, MainInfoTitle, MainInfoList
} from './styles';
import Constants from "expo-constants";
import InfoButton from '../../components/InfoButton';
import HeaderDefault from '../../components/HeaderDefault';
import SearchBar from '../../components/SearchBar';
import Api from '../../api'; 

export default function SearchScreen({ navigation, route }) {
    const { width, height } = useWindowDimensions();
    const [infoList, setInfoList] = useState([]);
    const [isLoading, setLoad] = useState(false);
    const [searchText, setSearch] = useState('');

    const listData = () => {
        setLoad(true);
        Api.get('/infos').then(res => {
            setLoad(false);
            if (!res?.data?.length) {
                setInfoList([]);
                return;
            }
            setInfoList(res.data);
        }).catch(err => {
            setLoad(false);
            setInfoList([]);
        });
    }

    useEffect(()=> {
        navigation.setParams({});
        setLoad(false);
        setInfoList([]);
        setSearch('');
        listData();
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
                            navigation.navigate('Home', {});
                        }}
                        text={'Buscar informações'}
                    />
                    <SearchCotainer>
                        <SearchBar
                            title={'Digite a informação que deseja saber'}
                            placeholder={'Ex.. Fazer transferência'}
                            onchange={({nativeEvent: {text}}) => setSearch(text)}
                        />
                    </SearchCotainer>
                    <WhiteContent>
                        <MainInfoTitle>
                            Informações
                        </MainInfoTitle>
                        <MainInfoList>
                            {
                                isLoading ? (
                                    <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>
                                        <ActivityIndicator color="#1B2431" size="large" />
                                    </View>
                                ) : (
                                    infoList.filter(item => (
                                        searchText.length ? item.title.toLowerCase().search(searchText.toLowerCase()) >= 0 : true
                                    )).map((item, index) => (
                                        <InfoButton
                                            key={item._id + index}
                                            keyItem={item._id + index}
                                            even={index%2 === 0}
                                            title={item.title}
                                            description={item.shortDescript}
                                            onclick={()=>{
                                                navigation.pop();
                                                navigation.navigate('InfoDetail', {
                                                    info: item._id,
                                                    from: 'Search'
                                                });
                                            }}
                                        />
                                    ))
                                )
                            }
                        </MainInfoList>
                    </WhiteContent>
                </MainView>
            </ScrollContainer>
            <StatusBar style="auto" />
        </Container>
    );
}