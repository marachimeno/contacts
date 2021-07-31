import axios from "axios";

export const PostRequest = (url, contact) => {

    return axios.post(url, { contact })
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error creating your contact");
        });
}

export const PatchRequest = (url, contact) => {

    return axios.patch(url, { contact })
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error updating your contact");
        })
}

export const GetRequest = (url) => {

    return axios.get(url)
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error getting the contact/s your contact");
        })
}

export const DeleteRequest = (url) => {

    return axios.delete(url)
        .catch(error => {
            console.log(error.response.data)
            alert("There was an error deleting your contact");
        })
}
