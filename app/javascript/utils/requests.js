import axios from "axios";

export const PostRequest = (params, contact) => {
    const url = `/api/v1/${params}`

    return axios.post(url, { contact })
        .then(response => {
            return response.data.data
        })
        .catch( error => {
            debugger
            console.log(error)
        });
}

export const PatchRequest = (url, contact) => {

    return axios.patch(url, { contact })
        .then(response => {
            return response.data.data
        })
        .catch( error => {
            debugger
            console.log(error)
        })
}

export const GetRequest = (url) => {

    return axios.get(url)
        .then(response => {
            return response.data.data.attributes
        })
        .catch( error => {
            debugger
            console.log(error)
        })
}
