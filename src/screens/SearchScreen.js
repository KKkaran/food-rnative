import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import  SearchBar  from "../components/searchBar";

const SearchScreen = () => {
    return <View style={styles.parentStyle}>
        <SearchBar/>
        <Text>SEARCH SCREEN</Text>
    </View>
}

const styles = StyleSheet.create({
    parentStyle:{
        margin:10
    }
});

export default SearchScreen;