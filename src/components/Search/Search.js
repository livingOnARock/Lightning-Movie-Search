import axios from 'axios';
 
const apiKey = "VhiuuvdlUkySXYfJSB-n9tvUyI_gQSlwUP5TGAZDnFJjpyGaG2n0MveEPmderqNAmfsm_GpAUuWtWyW80Cqlm5G5trvxhT2qtmJLNtVvy0DzMKMoOjbv22S-RrTZXHYx";
//const ClientID = "TVTXbVMnZ82oQTlwYqxu1g";

let Search = {
    search (searchRequest){
        const api_key = '460434c9495cf2dd6d32ac80934bf675';
        const searchResult = searchRequest;
        if(searchResult !== ''){
            const URL = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=${api_key}&query=${searchResult}`;
            return axios.get(URL).then(function(response){
                let results = response.data.results;
                let searchResults = [];
                results.forEach(result => {
                    //console.log(result);
                    searchResults.push(result);
                })
                console.log(searchResults);
                return searchResults;

            }).catch(function(error){
                console.log(error);
            });
        }
    }
};

export default Search;

// const API = {
//     search (searchRequest){
//         const api_key = '460434c9495cf2dd6d32ac80934bf675';
//         const searchResult = searchRequest;
//         if(searchResult !== ''){
//             const URL = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=${api_key}&query=${searchResult}`;
//             axios.get(URL).then(function(response){
//                 response.forEach(a => console.log(a))
//             }).catch(function(error){
//                 console.log(error);
//             });
//         }
       
//     }
// };

// export default API;