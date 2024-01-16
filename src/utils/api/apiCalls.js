import axiosInstance from ".";

export const getCall = async (url, params) => {
    const config = {
        ...params,
    };
    const response = await axiosInstance.get(url, config);
    return response?.data || response
};