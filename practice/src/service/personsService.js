import axios from 'axios'

const baseUrl = "/api/persons"

const getAll = () => {
    const request = axios.get (baseUrl)
    return request
}

const create = (newObject) => {
    const request = axios.post (baseUrl, newObject)
    return request.then (response => response.data)
}

const remove = (id) => {
    const request = axios.delete (`${baseUrl}/${id}`)
    return remove
}

export default {getAll, create, remove}

