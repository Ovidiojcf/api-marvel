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

export async function getCharacters (limit = 20, offset = 0) {
  try{
    const response = await api.get(`/characters?limit=${limit}&offset=${offset}&${getAuthParams()}`);
    return response.data;
  }catch(error){
    console.log('Failed to fetch characters');
    throw error;
  }
}
export async function getComics() {
  try{
    const response = await api.get(`/comics?${getAuthParams()}`);
    return response.data;
  }catch(error){
    console.log('Failed to fetch comics');
    throw error;
  }
}
export async function getSeries() {
  try {
    const response = await api.get(`/series?${getAuthParams()}`);
    return response.data;
  } catch (error) {
    console.log('Failed to fetch series');
    throw error;
  }
}
export async function getCharactersById(characterId){
  try{
    const response = await api.get(`/characters/{characterId}?${getAuthParams()}`);
    return response.data;
  }catch(error){
    console.log('Failed to fetch character: ',characterId);
    throw error;
  }
}

export default api;
