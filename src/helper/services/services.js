import axios from "axios";

const API = async (options) => {
    return await axios(options)
        .then((res) => {
            return res;
        })
        .then((err) => {
            return err;
        })
}

export default API;