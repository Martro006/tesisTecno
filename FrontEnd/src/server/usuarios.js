import axios from "axios"
import api from "./Config"

const getUsuarios = async () => {
    return await axios.get(api + "Usuarios");
}
const deleteUsuarios = async (id) => {
    return await axios.put(api + "Usuarios/delete", { res_Id: id });
}
const insertUsuarios = async (data) => {
    return await axios.post(api + "Usuarios/insert", data);
}

const actualizarUsuarios = async (data) => {
    return await axios.put(api + "Usuarios/update", data);
}


export const methods = {
    getUsuarios: getUsuarios,
    deleteUsuarios: deleteUsuarios,
    actualizarUsuarios: actualizarUsuarios,
    insertUsuarios: insertUsuarios
};