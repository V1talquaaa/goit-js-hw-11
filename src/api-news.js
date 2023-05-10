
import axios from "axios";

const API_KEY = 'apiKey=bcf8ba2c5fd94471ba7bc35b189c696c';
const BASE_URL = 'https://newsapi.org/v2/everything?q=';


async function fetchNews(query) {
    try {
           const {data} = await axios.get(`${BASE_URL}${query}&${API_KEY}`);
   return data;
        
    } catch (error) {
        console.log(error);
    }

    
}

export { fetchNews }