import { getConnection } from "../database/database";

const getLaboratorios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tbl_laboratorios WHERE lab_estado = 1");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLaboratorios = async (req, res) => {
    try {
        const lab_estado = 1;
        const { lab_codigo, lab_nombre, lab_inicio, lab_fin, lab_capacidad } = req.body;

        const laboratorios = { lab_codigo, lab_nombre, lab_inicio, lab_fin, lab_capacidad, lab_estado };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_laboratorios set ?", laboratorios);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLaboratorios = async (req, res) => {
    try {
        console.log(req.params);
        // const { cli_id } = req.params;
        const lab_estado = 1;
        const { lab_Id, lab_codigo, lab_nombre, lab_inicio, lab_fin, lab_capacidad } = req.body;
        const laboratorios = { lab_Id, lab_codigo, lab_nombre, lab_inicio, lab_fin, lab_capacidad, lab_estado };
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_laboratorios set ? where lab_Id = ?", [laboratorios, lab_Id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLaboratorios = async (req, res) => {
    try {
        const { lab_Id } = req.body;
        const lab_estado = 0;
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_laboratorios set lab_estado = ? where lab_id = ?", [lab_estado, lab_Id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const metod = { getLaboratorios, addLaboratorios, updateLaboratorios, deleteLaboratorios};