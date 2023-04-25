import axios from "axios";



export default class ImagesApiService {
    static KEY = '35656259-7e2fced7102c9b310ac9ede3a';
    static URL = 'https://pixabay.com/api/';

    constructor() {
        this.query = "";
        this.page = 1;
    }

    async fetchImages() {
    const url = `${ImagesApiService.URL}?key=${ImagesApiService.KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
    
    const { data } = await axios.get(url);
    this.incrementPage();
    return data;
}

incrementPage() {
    this.page += 1;
}

resetPage() {
    this.page = 1;
}
    
};