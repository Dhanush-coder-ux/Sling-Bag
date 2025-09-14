
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const NetworkCalls = async ({ method, path, data = null , isRetried=false}) => {
    const urlToCall = `${backend_url}${path}`;

    const getAuthHeaders = (accessToken) => ({
        'Authorization': `Bearer ${accessToken}`
    });

    try {
        const accessToken = Cookies.get('access_token');
        let response;

        const config = {
            headers: getAuthHeaders(accessToken),
        };

        if (method === "POST") {
            response = await axios.post(urlToCall, data, config);
        } else if (method === "GET") {
            response = await axios.get(urlToCall, config);
        } else if (method === "PUT") {
            response = await axios.put(urlToCall, data, config);
        } else if (method === "DELETE") {
            response = await axios.delete(urlToCall, config);
        } else {
            throw new Error("Unsupported HTTP method");
        }
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
        
        // Handle 401 Unauthorized (try refreshing token once)
        if (error.response && error.response.status === 401) {
            try {
                isRetried=true;
                const refreshToken = Cookies.get('refresh_token');
                const refreshResponse = await axios.get(
                    `${backend_url}/auth/token/access`,
                    {
                        params: { token: refreshToken },
                        withCredentials: true
                    }
                );
                
                // Update access_token cookie with new token
                const newAccessToken = refreshResponse.data.access_token;
                Cookies.set('access_token', newAccessToken);

                // Retry original request with new access token
                const configRetry = {
                    headers: getAuthHeaders(newAccessToken),
                    withCredentials: true
                };

                let retryResponse;
                if (method === "POST") {
                    retryResponse = await axios.post(urlToCall, data, configRetry);
                } else if (method === "GET") {
                    retryResponse = await axios.get(urlToCall, configRetry);
                } else if (method === "PUT") {
                    retryResponse = await axios.put(urlToCall, data, configRetry);
                } else if (method === "DELETE") {
                    retryResponse = await axios.delete(urlToCall, configRetry);
                }

                return retryResponse.data;
            } catch (refreshError) {
                console.warn("Refresh token expired or invalid – redirect to login");
                window.open('/login', '_self');  // Redirect to login page
                throw refreshError;
            }
        }

        // Other errors
        console.error("Network call error:", error);
        throw error;
    }
};

