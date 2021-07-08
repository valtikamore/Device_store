import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const AddBrandModal = ({show,onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Add brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control  placeholder={'Enter type name'}/>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={onHide} variant={"outline-success"}>Add brand</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBrandModal;
