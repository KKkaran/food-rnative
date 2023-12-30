import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Icon } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = () => {
    return <View style={styles.searchStyle}>
            
            <FontAwesome style={{fontSize:20}} name="search"/>
            <TextInput style={{borderColor:'red', borderWidth:3, marginLeft:10 }} placeholder="Search..."/>
            
        </View>
}

const styles = StyleSheet.create({
    searchStyle:{
        backgroundColor:'lightgray',
        padding:10,
        flexDirection:'row',
        borderRadius:15
    }
});

export default SearchBar;