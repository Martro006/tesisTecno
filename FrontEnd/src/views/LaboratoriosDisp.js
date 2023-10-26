import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { methodsR } from '../server/reservas';
import { methods } from '../server/laboratorios';
import { ReactSession } from 'react-client-session';
import ModalReservas from "./modales/ModalReservas";
import "./../assets/css/laboratoriosdisp.css"


const Laboratorios = () => {
    const [data, setData] = useState([]);
    const [modalForm, setModalLaboratorios] = useState(false);
    const toggleForm = () => setModalLaboratorios(!modalForm);

    const [entrada, setEntrada] = useState({
        opcion: 0,
        id: -1,
        Idlaboratorio: "",
        nombre: "",
        Idusuario: JSON.parse(ReactSession.get("user"))[0].us_id,
        fecha: "",
        horaentrada: "",
        horasalida: "",
    });

    async function obtenerDatos() {
        const res = await methods.getLaboratorios();
        console.log(res.data);
        if (res.status === 200) {
            setData(res.data);
        }
    }

    const seleccionarOpcion = (index, option) => {
        if (option === 1) {
            setEntrada({
                ...entrada,
                opcion: option,
                id: data[index]["res_Id"],
                Idlaboratorio: data[index]["lab_codigo"],
                fecha: data[index]["res_fecha"],
                horaentrada: data[index]["res_horaentrada"],
                horasalida: data[index]["res_horasalida"],
            })
            console.log(entrada);
            toggleForm();
        }
    }

    const enviarDatos = async (event) => {
        event.preventDefault();

        console.log(entrada);
        if (entrada.opcion === 1) {
            const res = await methodsR.insertReservas({
                "res_Idlaboratorio": entrada.Idlaboratorio,
                "res_Idusuario": entrada.Idusuario,
                "res_fecha": entrada.fecha,
                "res_horaentrada": entrada.horaentrada,
                "res_horasalida": entrada.horasalida
            });
            console.log(res.status);
            if (res.status === 200) {
                toggleForm();
                obtenerDatos();
            }
        } else if (entrada.opcion === 2) {
            const res = await methodsR.actualizarReservas({
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

   
        return (
            <Row>
            <h1 className="titulo-laboratorios">Laboratorios Disponibles</h1>
                {
                    data.map((d, index) => (
                        <Col sm="6">
                            <img
                                alt="Card"
                                src="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?size=626&ext=jpg&ga=GA1.2.2020415848.1692069622&semt=sph"
                                className="imagen_info"
                            />
                            <Card body>
                                <CardTitle tag="h5" className="informacion">
                                    <p>{d.lab_nombre}</p>
                                </CardTitle>
                                <CardBody>
                                    <p className="informacion">Lun-Sab</p>
                                    <Button onClick={() => seleccionarOpcion(index, 1)} className="bnt-color ">Reservar</Button>

                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                <ModalReservas
                    modalForm={modalForm}
                    toggleForm={toggleForm}
                    handleInputChange={handleInputChange}
                    entrada={entrada}
                    enviarDatos={enviarDatos}
                />
            </Row>
        );
    }

export default Laboratorios;