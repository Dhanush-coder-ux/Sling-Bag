
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const NetworkCalls = async ({ method, path, data = null}) => {
    const urlToCall = `${backend_url}${path}`;
    method=method.toUpperCase()
    console.log('in the network calls');
    
        var accessToken = Cookies.get('access_token');
        const refreshToken =Cookies.get('refresh_token');

        console.log("acces & refrest token", accessToken, refreshToken);
        let response;
        if (accessToken!=undefined && refreshToken!=undefined){
            
            try{
                const decodedAccesToken=jwtDecode(accessToken,{verify:false});
                const decodedRefreshToken=jwtDecode(refreshToken,{verify:false});
                const currentTime = Math.floor(Date.now() / 1000);
                console.log(currentTime)
                console.log(decodedAccesToken,);
                


                if (decodedAccesToken.exp < currentTime){
                    console.log("accesstoken expired");
                    if (decodedRefreshToken.exp < currentTime){
                        console.log('refresh token expired, please login'); 
                        return;
                    }
                    else{
                        const newAccessToken= await axios.get(`${backend_url}/auth/token/access`,{
                            headers:{"Authorization":`Bearer ${refreshToken}`,
                        },});

                        if(newAccessToken.status==200){
                            console.log('new access token ',newAccessToken.data.access_token);
                            Cookies.set('access_token',newAccessToken.data.access_token);
                            accessToken=newAccessToken.data.access_token;
                        }
                        else{
                            console.log("error :",newAccessToken.data);
                        }
                        
                    }
                }
                const config = {
                    headers: {
                        "Authorization":`Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    }
                    
                };
                console.log('before url to call : ',config);
                
                if (method === "POST") {
                    response = await axios.post(urlToCall,data,config);
                } else if (method === "GET") {
                    response = await axios.get(urlToCall,config);
                } else if (method === "PUT") {
                    response = await axios.put(urlToCall,data,config);
                } else if (method === "DELETE") {
                    response = await axios.delete(urlToCall,config);
                } else {
                    throw new Error("Unsupported HTTP method");
                }
                console.log('data from network : ',response.data);
                
                if (response.status==200){
                    return response.data;
                }
                else{
                    console.error("error :",response.data,'status code : ',response.status);
                    return;
                }

        } catch (error) {
            console.log(error);
            return 
        }

    }
    else{
        console.log("there is no tokens please login");
        return;
        
    }
};

