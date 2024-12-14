import Axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

// Base API URL (adjust as needed for your environment)
const BASE_URL = 'http://localhost:3001/api';

// Create Axios instance with configuration
const axios: AxiosInstance = Axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // 10 seconds timeout
    withCredentials: false, // Typically false for mobile apps unless cookies are required
    headers: {
        'Content-Type': 'application/json',
    },
});

// HTTP Service Object for API methods
const httpService = {
    get<T>(endpoint: string, params: Record<string, unknown> = {}): Promise<T> {
        return ajax<T>(endpoint, 'GET', null, params);
    },
    post<T>(endpoint: string, data: unknown = null, params: Record<string, unknown> = {}): Promise<T> {
        return ajax<T>(endpoint, 'POST', data, params);
    },
    put<T>(endpoint: string, data: unknown = null, params: Record<string, unknown> = {}): Promise<T> {
        return ajax<T>(endpoint, 'PUT', data, params);
    },
    delete<T>(endpoint: string, data: unknown = null, params: Record<string, unknown> = {}): Promise<T> {
        return ajax<T>(endpoint, 'DELETE', data, params);
    },
};

export default httpService;

// Core AJAX function for all requests
async function ajax<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data: unknown = null,
    params: Record<string, unknown> = {}
): Promise<T> {
    try {
        const config: AxiosRequestConfig = {
            url: endpoint,
            method,
            data,
            params,
        };
        const response = await axios(config);
        return response.data as T; // Return strongly-typed response data
    } catch (error: unknown) {
        await handleError(error);
        throw processError(error);
    }
}

// Handle and log errors
async function handleError(error: unknown): Promise<void> {
    if (Axios.isAxiosError(error)) {
        console.error('Axios Error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            headers: error.response?.headers,
        });
    } else if (error instanceof Error) {
        console.error('General Error:', {
            message: error.message,
            stack: error.stack,
        });
    } else {
        console.error('Unknown Error:', error);
    }
}

// Process errors before re-throwing
function processError(error: unknown): Error {
    if (Axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message || 'An Axios error occurred';
        return new Error(`AxiosError: ${message}`);
    } else if (error instanceof Error) {
        return error;
    } else {
        return new Error('An unknown error occurred');
    }
}
