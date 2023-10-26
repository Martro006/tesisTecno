import { getConnection } from "../database/database";

const getReservas = async (req, res) => {
    try {
        const connection = await getConnection();
        const { res_Idusuario } = req.body;
        const result = await connection.query("SELECT * FROM tbl_reservas INNER JOIN tbl_usuarios ON tbl_usuarios.us_id = tbl_reservas.res_Idusuario INNER JOIN tbl_laboratorios ON tbl_laboratorios.lab_codigo = tbl_reservas.res_Idlaboratorio WHERE res_Idusuario = ?", [res_Idusuario]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getReservasAdmin = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT * FROM tbl_reservas INNER JOIN tbl_usuarios ON tbl_usuarios.us_id = tbl_reservas.res_Idusuario INNER JOIN tbl_laboratorios ON tbl_laboratorios.lab_Id = tbl_reservas.res_Idlaboratorio");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addReservas = async (req, res) => {
    try {
        const res_estado = "PENDIENTE";
        const { res_Idlaboratorio, res_Idusuario, res_fecha, res_horaentrada, res_horasalida } = req.body;

        const reservas = { res_Idlaboratorio, res_Idusuario, res_fecha, res_horaentrada, res_horasalida, res_estado };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_reservas set ?", reservas);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateReservas = async (req, res) => {
    try {
        console.log(req.params);
        const res_estado = "APROVADO";
        const { res_Id } = req.body;
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_reservas set res_estado = ? where res_Id = ?", [res_estado, res_Id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteReservas = async (req, res) => {
    try {
        const { res_Id } = req.body;
        const res_estado = "CANCELADO";
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_reservas set res_estado = ? where res_Id = ?", [res_estado, res_Id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const metod = { getReservas, addReservas, updateReservas, deleteReservas };