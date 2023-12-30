import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = ({input, onInputChanged, onInputSubmitting}) => {
    return <View style={styles.parentStyle}>
            
            <FontAwesome style={styles.searchIconStyle} name="search"/>
            <TextInput
                value={input}
                style={styles.searchInputStyle}
                placeholder="Search"
                onChangeText={(input) => {
                    onInputChanged(input)
                }}
                onEndEditing={()=> onInputSubmitting()}/>
                
        </View>
}

const styles = StyleSheet.create({
    parentStyle:{
        backgroundColor:'lightgray',
        flexDirection:'row',
        borderRadius: 15,
        height:50
    },
    searchIconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    searchInputStyle: {
        marginLeft: 10,
        flex: 1,
        fontSize:20
    }
});

export default SearchBar;