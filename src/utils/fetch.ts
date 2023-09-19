const API_KEY = 'xQ9dHq7CTEgfrh8NRYcftJyWnhrTlfSx3a1UwMsv';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
    try {
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${typeof urlParams !== 'undefined' && urlParams?.length > 0 ? urlParams : ''}`,
        );
        
        const data = await response.json();

        return Promise.resolve(data);

    } catch (error) {
        return Promise.reject(error);
    }
};