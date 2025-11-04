
const API_BASE_URL = 'http://localhost:3000';



async function apiClient(path: string, options) {
    const cleanPath = path.replace(/^\/+|\/+$/g, '');
    const url = `${API_BASE_URL}/${cleanPath}`;

    try {
        const response = await fetch(url, options);

        const responseText = await response.text();
        let responseData;
        
        try {
            responseData = responseText ? JSON.parse(responseText) : null;
        } catch (e) {
            console.warn('Non-JSON response:', responseText);
            responseData = responseText;
        }

        

        if (!response.ok) {
            const error = new Error(response.statusText || 'API request failed');
            (error as any).response = {
                status: response.status,
                data: responseData
            };
            throw error;
        }

        return responseData;
    } catch (error) {
        
        throw error;
    }
}
export default apiClient