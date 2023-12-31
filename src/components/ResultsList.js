import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'

const ResultList = ({businesses}) => {
    const cheapBusiness = [];
    const medBusiness = [];
    const expensiveBusiness = []
    businesses.forEach(function (business) {
        let dollarCount = business.price?.split("").length || 0;
        if (dollarCount < 2) {
            cheapBusiness.push(business)
        } else if (dollarCount == 2) {
            medBusiness.push(business)
        } else {
            expensiveBusiness.push(business)
        }
    })
    console.log(cheapBusiness.length, medBusiness.length, expensiveBusiness.length)


    return <View>
        <View>
        <Text style={{fontWeight:'bold'}}>Economical</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={business=>business.display_address}
        data={cheapBusiness}
        renderItem={({item, index}) => { 
            return <View style={styles.parent}>
                <Text>{item.name}</Text>
                <Image
                        style={styles.imageStyle}
                        source={{uri: item.image_url}} />
                </View>
        }}>
        </FlatList>
        </View>
        <View>
        <Text style={{fontWeight:'bold'}}>Medium</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={business=>business.display_address}
        data={medBusiness}
        renderItem={({item, index}) => { 
            return <View style={styles.parent}>
                <Text>{item.name}</Text>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: item.image_url}} />
                </View>
        }}>
        </FlatList>
        </View>
        <View>
        <Text style={{fontWeight:'bold'}}>Expensive</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={business=>business.display_address}
        data={expensiveBusiness}
        renderItem={({item, index}) => { 
            return <View style={styles.parent}>
                <Text>{item.name}</Text>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: item.image_url}} />
                </View>
        }}>
        </FlatList>
    </View>
    </View>
}

const styles = StyleSheet.create({
    parent: {
        margin:10
    },
    imageStyle: {
        width: 150,
        height: 100
    }
})

export default ResultList;