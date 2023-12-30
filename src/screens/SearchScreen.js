import React, { useState } from "react";
import { View, Text, StyleSheet} from 'react-native';
import  SearchBar  from "../components/searchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchApi, results, error] = useResults();

    return <View style={styles.parentStyle}>
        <SearchBar
            input = {searchKeyword}
            onInputChanged={(input) => {
                console.log("state changed", input)
                setSearchKeyword(input)
            }}
            onInputSubmitting={() => {
                console.log("submitting now!!")
                searchApi(searchKeyword)
            }}/>
        {error ? <Text>{ error }</Text> : null}
        <Text>Search Results: { results.length }</Text>
    </View>
}

const styles = StyleSheet.create({
    parentStyle:{
        margin:10
    }
});

export default SearchScreen;