import axios from "axios";

const key = "6c073371901e4ce2a50f91a998a20ee5";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

export const getGenreList = async () => {
    try {
        const response = await axiosCreate.get('/genres?key=' + key);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllGames = async () => {
    try {
        const response = await axiosCreate.get('/games?key=' + key);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getGameListByGenreId = async (id) => {
    try {
        const response = await axiosCreate.get('/games?key=' + key + '&genres=' + id);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const GlobalApi = {
    getGenreList,
    getAllGames,
    getGameListByGenreId
};

export default GlobalApi;












