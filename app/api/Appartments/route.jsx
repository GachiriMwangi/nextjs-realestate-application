import {NextResponse} from 'next/server'
export async function GET(request){
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://bayut.p.rapidapi.com/properties/list',
      params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '10',
      },
      headers: {
        'X-RapidAPI-Key': process.env.api_key,
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
       /* 
       *purpose
       */
      const data = response.data.hits
        return new Response(data[0])
        } catch (error) {
        console.error(error);
    }
}