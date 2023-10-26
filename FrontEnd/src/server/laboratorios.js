import axios from "axios"
import api from "./Config"

const getLaboratorios = async () => {
    return await axios.get(api + "laboratorios");
}
const deleteLaboraatorios = async (id) => {
    return await axios.put(api + "laboratorios/delete", { lab_Id: id });
}
const insertLaboratorios = async (data) => {
    return await axios.post(api + "laboratorios/insert", data);
}

const actualizarLaboratorios = async (data) => {
    return await axios.put(api + "laboratorios/update", data);
}

export const methods = {
    getLaboratorios: getLaboratorios,
    deleteLaboraatorios: deleteLaboraatorios,
    actualizarLaboratorios: actualizarLaboratorios,
    insertLaboratorios: insertLaboratorios
};