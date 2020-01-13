import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:'AIzaSyBEY4AJ-Qy8HoKLea63NTisVzkuD7Ou4i4'
        
    }
});