
import axios from "axios";

const API_KEY = 'apiKey=bcf8ba2c5fd94471ba7bc35b189c696c';
const BASE_URL = 'https://newsapi.org/v2/everything?q=';


export default class NewsApiService {
    constructor() {
        this.query = "";
        this.page = 1;
    }


   async getNews() {
        const url = `${BASE_URL}${this.query}&${API_KEY}&pageSize=10&page=${this.page}`;
        const {data} = await axios.get(url);
        this.incrementPage();
        return data;
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1;
    }
}






















// async function fetchNews(query) {
//     try {
//            const {data} = await axios.get(`${BASE_URL}${query}&${API_KEY}`);
//    return data;
        
//     } catch (error) {
//         console.log(error);
//     }

    
// }

// export { fetchNews }

