import axios from 'axios' 
const api_key = process.env.api_key
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get(url, {
       headers: {
     'X-RapidAPI-Key': api_key,
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    })
    return data
}