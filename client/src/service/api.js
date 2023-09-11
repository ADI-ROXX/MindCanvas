// This file will be used for api calling 

import {SERVICE_URLS} from "../constants/constant.js"
import axios from "axios";
import {getAccessToken } from "../utils/common-utils.js";


// const API_URL = "https://mindcanvas-api.onrender.com";
const API_URL="http://localhost:8000"


const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout : 50000,
    headers:{
        authorization: getAccessToken(),
    }
    
});

axiosInstance.interceptors.request.use(
    (config)=>{



        return config;
    },
     (error)=>{

        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response)=>{
        //Here you have got back the response, now you can stop the spinner 

        const a=processResponse({status:response.status, data:response.data});

        return a;
    },
    (error)=>{
        //Here you have got back the error, now you can stop the spinner

        return Promise.resolve(processError(error));
    }
)

// if sucess -> you can return {status:"success", data:Object}
// if failure -> you can return {status:"failure", failureCode: int} 

const processResponse=(response )=>{

    if(response?.status===200){

        return {
            
            success:true,
            data: response.data
        }}
    else{
        return {
            success:false,
            code: response?.status
        }
    }
}
const processError = (err )=>{
    if(err.response){
        // It means that request was sent to the server but the server responded with
            // a status other than 200
        console.log("Error in response: " + err);
        return {status:"failure", code: err.response.status}
    } else if(err.request){
        // It means that the connection was not established between the server and the client successfully 
            // i.e. request was correct but there was an error while connecting the server to the client or some other error due to which the server was not returning a response
        console.log("Error in connection between the server and the client: "+err);
        return {status:"failure",code: 503} ; //503 is the error code if the server is not able to return response fir a request
                            // here we could not have done err.response.status because the response from the server is null 

    } else {
        // It means that there was some error from the frontend itself
        console.log("Bad request: "+err.toJSON());
        return {status:"failure",code: 400} ; //400 is the error code for bad request in http

    }
}

const API = {}; // we will call the api using this


for( const [key, value] of Object.entries(SERVICE_URLS) ){

    API[key]  = (body) => {

        return axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers:{
                authorization: getAccessToken(),
            }

        }
        )
      
    
}
}

export {API};