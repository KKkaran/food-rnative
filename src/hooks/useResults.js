import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    
    const [results, setResults] = useState([]);
    const [error, setError] = useState("")

    const searchApi = async (searchKeyword) => {
        console.log("searching now", searchKeyword)
        try {
            var response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchKeyword,
                    location: 'new jersey'
                }
            })
            console.log(response.data.businesses[0])
            setResults(response.data.businesses)
        } catch (er) {
            console.log(er)
            setError("Something went wrong, Please try again!")
        }
    } 

    useEffect(() => {
        searchApi("pasta")
    }, [])

    return [searchApi, results, error];
}