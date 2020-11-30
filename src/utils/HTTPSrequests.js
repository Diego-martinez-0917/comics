import axios from "axios"
export const getComic = async()=>{
    try {
        const response = await axios({
            method:'GET',
            url:`https://proxyhub.herokuapp.com/~/https://xkcd.com/${Math.floor((Math.random() * 2391) + 1)}/info.0.json`,            
        })
     return response.data
    } 
    catch (error) {        
        throw error
    }
}