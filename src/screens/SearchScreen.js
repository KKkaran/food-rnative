import React, { useState } from "react";
import { View, Text, StyleSheet} from 'react-native';
import  SearchBar  from "../components/searchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("")

    const searchApi = async () => {
        console.log("searching now")
        try {
            var response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchKeyword,
                    location: 'new jersey'
                }
            })
            console.log(response.data)
            setResults(response.data.businesses)
        } catch (er) {
            console.log(er)
            setError("Something went wrong, Please try again!")
        }
    } 
   
    return <View style={styles.parentStyle}>
        <SearchBar
            input = {searchKeyword}
            onInputChanged={(input) => {
                console.log("state changed", input)
                setSearchKeyword(input)
            }}
            onInputSubmitting={() => {
                console.log("submitting now!!")
                searchApi()
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