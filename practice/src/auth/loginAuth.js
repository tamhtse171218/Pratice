import axios from 'axios';
const API_URL = "https://6717ba87b910c6a6e029b171.mockapi.io/api/accounts";
export const loginService = async (username, password) => {
    try {
        const response = await axios.get(API_URL);
        const users = response.data;
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            return user;
        } else {
            throw new Error("Invalid username or password");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to authenticate");

    }
}