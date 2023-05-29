import axios from "axios"



export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
export const ApiKey = process.env.API_KEY_RAPID;

const options = {
   
    params: {
      maxResults: '30',
    },
    headers: {
      'X-RapidAPI-Key': "8b16f804b4msha01c9f197e5732bp16ffe1jsn09300be24cdf",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromAPI = async (url) =>  {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options)
    return data
  }