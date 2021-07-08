import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import start from '../assets/star.png'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    const onClickLink = () => {
        history.push(`${DEVICE_ROUTE}/${device.id}`)
    }
    return (
        <Col md={3} className={'mt-3'} onClick={onClickLink}>
            <Card style={{width:150,cursor:'pointer'}} border={'light'} >
                <Image src={device.img} width={150} height={150} />
                <div className={'d-flex justify-content-between  mt-1 text-black-50'}>
                    <div>Sumsung</div>
                    <div className={'d-flex align-items-center'}>
                        <span>5</span>
                        <Image src={start} height={18} width={18}/>
                    </div>

                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
