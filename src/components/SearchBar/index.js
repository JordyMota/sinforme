import React from 'react';
import { Image } from 'react-native';
import { SearchItem, SearchTitle, SearchInputContainer, SearchInput, SearchIcon } from './styles';

const searchIcon = require('../../assets/search_icon.png');

export default function SearchBar(props) {
    const { title='', customStyle={}, titleStyle={}, inputStyle={}, onchange=(evn)=>{}, placeholder='' } = props;
    return (
        <SearchItem style={{...customStyle}}>
            <SearchTitle style={{ ...titleStyle }}>
                { title }
            </SearchTitle>
            <SearchInputContainer>
                <SearchIcon>
                    <Image source={searchIcon} style={{ width: '100%', height: '100%' }} />
                </SearchIcon>
                <SearchInput
                    style={{ ...inputStyle }}
                    onChange={evnt => onchange(evnt)}
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    placeholderTextColor='rgba(0,0,0,.55)'
                />
            </SearchInputContainer>
        </SearchItem>
    );
}