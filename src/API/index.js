import axios from "axios";

export const get = async(path) => {
    try {
        const request = await axios.get(
            `${process.env.REACT_APP_API_URL}/${path}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },
            }
        );

        return request.data;
    } catch (error) {
        console.log(error);
    }
};