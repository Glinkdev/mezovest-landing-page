import axios from "axios";

const baseURL = "https://control.dev.mezovest.com/pricing/current";

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Origin": "*",
		"crossorigin": "true",
		"X-Frame-Options": "DENY",
		"Credentials": "same-origin",
	},
});

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
	function (response) {
		if (response.status === 401) {
            return
		} else {
			return response;
		}
	},
	function (error) {
		if(error.toJSON().message === 'Network Error'){
			const internetErrorMessage = "Your internet connection might be offline. Please, check and try again"
			return {
				data: {
					message: internetErrorMessage
				},
				status: false,
				message: internetErrorMessage
			}
		}
		if (error.response.status === 401) {
            console.log(error.response.status)
		} else {
			return Promise.reject(error);
		}
	},
);

export default axiosInstance;