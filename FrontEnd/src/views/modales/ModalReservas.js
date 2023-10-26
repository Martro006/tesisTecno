import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const ModalReservas = (props) => {
    return (
        <Modal isOpen={props.modalForm} toggle={props.toggleForm}>
            <ModalHeader toggle={props.toggleForm}>
                Rerservar
            </ModalHeader>
            <Form onSubmit={props.enviarDatos}>
                <ModalBody>
                    <FormGroup row>
                        <Label
                            for="labI"
                            sm={3}
                        >
                            Id Laboratorio
                        </Label>
                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="labI"
                                name="Idlaboratorio"
                                readOnly
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.entrada.Idlaboratorio}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="fechaI"
                            sm={3}
                        >
                            Fecha
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="date"
                                bsSize="sm"
                                id="fechaI"
                                name="fecha"
                                onChange={props.handleInputChange}
                                value={props.entrada.fecha}
                            >
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="horaentradaI"
                            sm={3}
                        >
                            Hora de entrada
                        </Label>

                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="horaentradaI"
                                name="horaentrada"
                                onChange={props.handleInputChange}
                                value={props.entrada.horaentrada}
                                type="select"
                            >
                                <option>
                                    8:00 Am
                                </option>
                                <option>
                                    9:00 Am
                                </option>
                                <option>
                                    10: 00 Am
                                </option>
                                <option>
                                    11: 00 Am
                                </option>
                                <option>
                                    12:00 Am
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="horasalidaI"
                            sm={3}
                        >
                            Hora de salida
                        </Label>

                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="horasalidaI"
                                name="horasalida"
                                onChange={props.handleInputChange}
                                value={props.entrada.horasalida}
                                type="select"
                            >
                                <option>
                                    8:00 Am
                                </option>
                                <option>
                                    9:00 Am
                                </option>
                                <option>
                                    10: 00 Am
                                </option>
                                <option>
                                    11: 00 Am
                                </option>
                                <option>
                                    12:00 Am
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" >
                        Guardar
                    </Button>
                    <Button color="secondary" onClick={props.toggleForm}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
}

export default ModalReservas;