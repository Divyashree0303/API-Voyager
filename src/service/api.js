import axios from 'axios';
import {getHeaderAndParams} from '../utils/common-utils'   

export const getData = async (formData,jsonText,paramData,HeaderData) => {

    const apiType = formData.type.toLowerCase();
    const apiUrl = formData.url;
    const apiHeaders = getHeaderAndParams(HeaderData);
    const apiParams = getHeaderAndParams(paramData);
    
    try{

        return await axios({
            method : apiType,
            url: apiUrl,
            body: jsonText,
            headers: apiHeaders,
            params : apiParams
        })



    }catch(error){
        console.log("error while calling getData api",error);
        return 'error';
    }

}