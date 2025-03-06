import axios from 'axios';
import CryptoJS from 'crypto-js';


const myPublicKey = 'ca2acab7e3f11c178f4cc7cd00d1c403';
const myPrivateKey = '7ba35ba7aeea133813224337a78f98a6b1651132';
const baseURL = 'https://gateway.marvel.com/v1/public/';

const getAuthParams = () => {
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts+ myPrivateKey + myPublicKey).toString();
  return `ts=${ts}&apikey=${myPublicKey}&hash=${hash}`;
}

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export async function getCharacters () {
  try{
    const response = await api.get(`/characters?${getAuthParams()}`);
    return response.data;
  }catch(error){
    console.log('Failed to fetch characters');
    throw error;
  }
}

export default api;
