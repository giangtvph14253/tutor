import instance from "./axiosClient";

const pathName = '/products'

export const getProducts = () => {
    return instance.get(pathName);
}

export const createProducts = (data : any) => {
    return instance.post(pathName,data);
}

export const updateProducts = (data : any) => {
    return instance.put(pathName, data)
}

export const deleteProducts = (id : any) => {
    return instance.delete(`${pathName}/${id}`)
}