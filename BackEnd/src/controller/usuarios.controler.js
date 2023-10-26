import { getConnection } from "../database/database";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tbl_usuarios WHERE us_estado = 1");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUsuarios = async (req, res) => {
    try {
        const us_estado = 1;
        const { us_matricula, us_nombre1, us_nombre2, us_apellido1, us_apellido2, us_carrera, us_contrasenia,us_rango } = req.body;
        
        const usuarios = { us_matricula, us_nombre1, us_nombre2, us_apellido1, us_apellido2, us_carrera, us_contrasenia, us_rango, us_estado };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_usuarios set ?", usuarios);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuarios = async (req, res) => {
    try {
        console.log(req.params);
        const us_estado = 1;
        const { us_id ,us_matricula, us_nombre1, us_nombre2, us_apellido1, us_apellido2, us_carrera, us_contrasenia,us_rango} = req.body;
        const usuarios = { us_id ,us_matricula, us_nombre1, us_nombre2, us_apellido1, us_apellido2, us_carrera, us_contrasenia, us_rango, us_estado  };
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_usuarios set ? where us_id = ?", [usuarios, us_id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuarios = async (req, res) => {
    try {
        const { us_id } = req.body;
        const us_estado = 0;
        const connection = await getConnection();
        const result = await connection.query("UPDATE tbl_usuarios set us_estado = ? where us_id = ?", [us_estado, us_id]);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const autenticacion = async (req, res) => {
    try {

        const { us_matricula, us_contrasenia } = req.body;
        if (us_matricula == null || us_matricula == "") {
            res.status(400);
            res.send("correo invalido");
        }

        if (us_contrasenia == null || us_contrasenia == "") {
            res.status(400);
            res.send("contra invalido");
        }

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM `tbl_usuarios` WHERE us_matricula= ? AND us_contrasenia= ? AND us_estado = 1", [us_matricula, us_contrasenia]);

        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const metod = { getUsuarios, addUsuarios, updateUsuarios, deleteUsuarios, autenticacion };