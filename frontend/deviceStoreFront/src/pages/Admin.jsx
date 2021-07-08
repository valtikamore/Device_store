import React from 'react';
import {Button, Container} from "react-bootstrap";
import AddBrandModal from "../components/modals/adminModals/addBrandModal";
import AddDeviceModal from "../components/modals/adminModals/addDeviceModal";
import AddTypeModal from "../components/modals/adminModals/addTypeModal";

const Admin = () => {
    const [brandVisible, setBrandVisible] = React.useState(false);
    const [typeVisible, setTypeVisible] = React.useState(false);
    const [deviceVisible, setDeviceVisible] = React.useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={"outline-dark"} className={'mt-3 p-4'} onClick={() => setBrandVisible(true)}>Add brand</Button>
            <Button variant={"outline-dark"} className={'mt-5 p-4'} onClick={() => setTypeVisible(true)}>Add type</Button>
            <Button variant={"outline-dark"} className={'mt-5 p-4'} onClick={() => setDeviceVisible(true)}>Add device</Button>

            <AddBrandModal show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <AddDeviceModal show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <AddTypeModal show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
