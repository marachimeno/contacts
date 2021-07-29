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

export const PatchRequest = (params, contact) => {
    const url = `/api/v1/${params}`

    return axios.patch(url, { contact })
        .then(response => {
            return response.data.data
        })
        .catch( error => {
            debugger
            console.log(error)
        })
}

export const GetRequest = (params) => {
    const url = `/api/v1/${params}`

    return axios.get(url)
        .then(response => {
            return response.data.data.attributes
        })
        .catch( error => {
            debugger
            console.log(error)
        })
}
