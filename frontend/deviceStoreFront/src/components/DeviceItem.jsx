import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width:150,cursor:'pointer'}} border={'light'}>
                <Image src={device.img} width={150} height={150} >
                    <div>

                    </div>
                </Image>
            </Card>
        </Col>
    );
};

export default DeviceItem;
