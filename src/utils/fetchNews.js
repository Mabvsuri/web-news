import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2/";
const defaultParams = {
    category: "general",
    country: "us",
}

export const fetchNews = async (endpoint = "top-headlines", params = {}) => {
    try {
        const isEverythingEndpoint = endpoint === "everything";
        
        const response = await axios.get(`${API_URL}${endpoint}`, {
            params: {
                ...(isEverythingEndpoint ? {} : defaultParams),
                ...params,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    }
    catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}

export const getTopHeadlines = (params = {}) => fetchNews("top-headlines", params);
export const getAllNews = (params = {}) => fetchNews("everything", { q: "news", ...params });

