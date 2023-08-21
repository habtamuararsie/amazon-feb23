import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://127.0.0.1:5001/feb23-3388b/us-central1/api',
  // http://127.0.0.1:5001/feb23-3388b/us-central1/api
  // http://127.0.0.1:5001/feb23-3388b/us-central1/api
  // https://us-central1-aug-bc35b.cloudfunctions.net/api
});

export default instance;

// alt="Shop Books" src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"