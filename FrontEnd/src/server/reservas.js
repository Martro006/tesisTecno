import axios from "axios"
import api from "./Config"

const getReservas = async (idUsu) => {
    return await axios.post(api + "reservas", { res_Idusuario: idUsu });
}
const deleteReservas = async (id) => {
    return await axios.put(api + "reservas/delete", { res_Id: id });
}
const insertReservas = async (data) => {
    return await axios.post(api + "reservas/insert", data);
}

const actualizarReservas = async (data) => {
    return await axios.put(api + "reservas/update", data);
}


export const methodsR = {
    getReservas: getReservas,
    deleteReservas: deleteReservas,
    actualizarReservas: actualizarReservas,
    insertReservas: insertReservas
};