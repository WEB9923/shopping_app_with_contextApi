import axios from "axios";


export const getData = async (url) => {
    try {
        const response = await axios({
            method:"get",
            url:url,
            responseType:"json"
        });
        return response.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
}
