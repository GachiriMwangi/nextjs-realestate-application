import axios from 'axios' 

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get(url, {
       headers: {    
     'X-RapidAPI-Key': '233edd6a44mshbb60e563d682a04p10db49jsn039d71489afe',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    })
   
    return data
}