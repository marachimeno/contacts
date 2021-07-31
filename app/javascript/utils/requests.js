import axios from "axios";

export const PostRequest = (params, contact) => {
    const url = `/api/v1/${params}.json`

    return axios.post(url, { contact })
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error creating your contact");
        });
}

export const PatchRequest = (params, contact) => {
    const url = `/api/v1/${params}.json`

    return axios.patch(url, { contact })
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error updating your contact");
        })
}

export const GetRequest = (params) => {
    const url = `/api/v1/${params}.json`

    return axios.get(url)
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error getting the contact/s your contact");
        })
}

export const DeleteRequest = (params) => {
    const url = `/api/v1/${params}.json`

    return axios.delete(url)
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error deleting your contact");
        })
}
