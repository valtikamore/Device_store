import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const AddDeviceModal = ({show,onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control>
                        placeholder={'Enter type name'}
                    </Form.Control>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={onHide} variant={"outline-success"}>Add device</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddDeviceModal;
