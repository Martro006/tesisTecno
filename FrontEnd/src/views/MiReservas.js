import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { methodsR } from '../server/reservas';
import "./../assets/css/laboratorios.css";
import { ReactSession } from 'react-client-session';

const MiResevas = () => {
    const usu = JSON.parse(ReactSession.get("user"))[0].us_id;

    console.log(usu);
    const [data, setData] = useState([]);

    const [entrada, setEntrada] = useState({
        opcion: 0,
        id: -1,
        lab: "",
        fecha: "",
        hEntrada: "",
        hSalida: "",
    });

    async function obtenerDatos() {
        const res = await methodsR.getReservas(usu);
        console.log(res.data);
        if (res.status === 200) {
            setData(res.data);
        }
    }

    async function eliminarDatos(id) {
        const res = await methodsR.deleteReservas(id);
        if (res.status === 200) {
            obtenerDatos();
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


    return (
        <Card className="fondo">
            <br />
            <CardTitle tag="h5" className="text-center" >
                <Col className="d-flex justify-content-center align-items-center">
                    <h3>
                        <strong className="titulo">
                            LISTA DE RESERVAS
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
                                Laboratorio
                            </th>
                            <th>
                                Fecha
                            </th>
                            <th>
                                H entrada
                            </th>
                            <th>
                                H salida
                            </th>
                            <th>
                                SATTUS
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
                                        {d.res_Idlaboratorio}
                                    </td>

                                    <td>
                                        {d.res_fecha}
                                    </td>
                                    <td>
                                        {d.res_horaentrada}
                                    </td>
                                    <td>
                                        {d.res_horasalida}
                                    </td>
                                    <td>
                                        {d.res_estado}
                                    </td>
                                    <td>
                                        <Button onClick={() => eliminarDatos(d.res_Id)}>ELIMINAR</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </CardBody>
        </Card>
    );

}
export default MiResevas;