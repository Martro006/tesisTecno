import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const ModalLaboratorios = (props) => {
    return (
        <Modal isOpen={props.modalForm} toggle={props.toggleForm}>
            <ModalHeader toggle={props.toggleForm}>
                LABORATORIOS
            </ModalHeader>
            <Form onSubmit={props.enviarDatos}>
                <ModalBody>
                    <FormGroup row>
                        <Label
                            for="codI"
                            sm={3}
                        >
                            CODIGO
                        </Label>
                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="codI"
                                name="codigo"
                                placeholder="Escriba el codigo del laboratorio"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.entrada.codigo}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="nombreI"
                            sm={3}
                        >
                            Nombre
                        </Label>
                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="nombreI"
                                name="nombre"
                                placeholder="Escriba el nombre del laboratorios"
                                type="text"
                                //step="0.01"
                                onChange={props.handleInputChange}
                                value={props.entrada.nombre}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="inicioI"
                            sm={3}
                        >
                            INICIO
                        </Label>
                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="inicioI"
                                name="inicio"
                                onChange={props.handleInputChange}
                                value={props.entrada.inicio}
                                type="select"
                            >
                                <option>
                                    8:00 AM
                                </option>
                                <option>
                                    9:00 AM
                                </option>
                                <option>
                                    10:00 AM
                                </option>
                                <option>
                                    11: 00 AM
                                </option>
                                <option>
                                    12:PM: Am
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="finI"
                            sm={3}
                        >
                            FIN
                        </Label>

                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="finI"
                                name="fin"
                                onChange={props.handleInputChange}
                                value={props.entrada.fin}
                                type="select"
                            >
                                <option>
                                    8:00 AM
                                </option>
                                <option>
                                    9:00 AM
                                </option>
                                <option>
                                    10:00 AM
                                </option>
                                <option>
                                    11: 00 AM
                                </option>
                                <option>
                                    12:PM: Am
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="capI"
                            sm={3}
                        >
                            CAPACIDAD
                        </Label>
                        <Col sm={9}>
                            <Input
                                bsSize="sm"
                                id="capI"
                                name="capacidad"
                                placeholder="Escriba la capacidad del laboratorio"
                                type="text"
                                //step="0.01"
                                onChange={props.handleInputChange}
                                value={props.entrada.capacidad}
                            />
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

export default ModalLaboratorios;