import axios from 'axios'
const KEY = 'AIzaSyCOIkvrCERO9Sj5riNXMjz44zg4NoWgHnY';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY
    }

})