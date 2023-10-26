import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { methods } from '../server/laboratorios';
import ModalLaboratorios from "./modales/ModalLaboratorios";
import { Navigate } from 'react-router-dom';
import "./../assets/css/laboratorios.css"

import { ReactSession } from 'react-client-session';

const Laboratorios = () => {
    const [data, setData] = useState([]);
    const [modalForm, setModalLaboratorios] = useState(false);
    const toggleForm = () => setModalLaboratorios(!modalForm);

    const [entrada, setEntrada] = useState({
        opcion: 0,
        id: -1,
        codigo: "",
        nombre: "",
        inicio: "",
        fin: "",
        capacidad: "",
    });

    async function obtenerDatos() {
        const res = await methods.getLaboratorios();
        if (res.status === 200) {
            setData(res.data);
        }
    }

    async function eliminarDatos(id) {
        const res = await methods.deleteLaboraatorios(id);
        if (res.status === 200) {
            obtenerDatos();
        }
    }

    const seleccionarOpcion = (index, option) => {
        //console.log(data)
        if (option === 1) {
            setEntrada({
                ...entrada,
                opcion: option,
                id: -1,
                codigo: "",
                nombre: "",
                inicio: "",
                fin: "",
                capacidad: "",
                estado: "",
            })

            toggleForm();
        }
        else if (option === 2) {
            setEntrada({
                ...entrada,
                opcion: option,
                id: data[index]["lab_Id"],
                codigo: data[index]["lab_codigo"],
                nombre: data[index]["lab_nombre"],
                inicio: data[index]["lab_inicio"],
                fin: data[index]["lab_fin"],
                capacidad: data[index]["lab_capacidad"],
            })
            toggleForm();
        }
    }

    const enviarDatos = async (event) => {
        event.preventDefault();

        if (entrada.opcion === 1) {
            const res = await methods.insertLaboratorios({
                "lab_codigo": entrada.codigo,
                "lab_nombre": entrada.nombre,
                "lab_inicio": entrada.inicio,
                "lab_fin": entrada.fin,
                "lab_capacidad": entrada.capacidad
            });
            if (res.status === 200) {
                toggleForm();
                obtenerDatos();
            }
        } else if (entrada.opcion === 2) {
            const res = await methods.actualizarLaboratorios({
                "lab_Id": entrada.id,
                "lab_codigo": entrada.codigo,
                "lab_nombre": entrada.nombre,
                "lab_inicio": entrada.inicio,
                "lab_fin": entrada.fin,
                "lab_capacidad": entrada.capacidad
            });
            console.log(res.status);
            if (res.status === 200) {
                toggleForm();
                obtenerDatos();
            }
        }
    }
    const handleInputChange = (event) => {
        setEntrada({
            ...entrada,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        obtenerDatos();
    }, []);// hasta aqui tengo los datos

    if (JSON.parse(ReactSession.get("user"))[0].us_rango !== 1) {
        return (
            <Navigate to="/home" />
        );
    } else {
        return (
            <Card className="fondo">
                <br />
                <CardTitle tag="h5" className="text-center" >
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>
                            <strong className="titulo">
                                LISTA DE LABORATORIOS
                            </strong>
                        </h3>
                    </Col>
                </CardTitle>
                <CardHeader className="bng_laboratorios">
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center ">
                            <strong>
                                Laboratorios
                            </strong>
                        </Col>
                        <Col xs="6" sm="4" lg="2" >
                            <Button outline color='primary' size='sm' onClick={() => seleccionarOpcion(0, 1)}>
                                Nuevo
                            </Button>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Table striped responsive size='sm' className="fondo_tabla">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    CODIGO
                                </th>
                                <th>
                                    NOMBRE
                                </th>
                                <th>
                                    INICIO
                                </th>
                                <th>
                                    FIN
                                </th>
                                <th>
                                    CAPACIDAD
                                </th>
                                <th>
                                    OPCIONES
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, index) => (

                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {d.lab_codigo}
                                        </td>
                                        <td>
                                            {d.lab_nombre}
                                        </td>
                                        <td>
                                            {d.lab_inicio}
                                        </td>
                                        <td>
                                            {d.lab_fin}
                                        </td>
                                        <td>
                                            {d.lab_capacidad}
                                        </td>
                                        <td>
                                            <Button onClick={() => seleccionarOpcion(index, 2)}>ACTUALIZAR</Button>
                                            <Button onClick={() => eliminarDatos(d.lab_Id)}>ELIMINAR</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <ModalLaboratorios
                        modalForm={modalForm}
                        toggleForm={toggleForm}
                        handleInputChange={handleInputChange}
                        entrada={entrada}
                        enviarDatos={enviarDatos}
                    />
                </CardBody>
            </Card>
        );
    }
}
export default Laboratorios;