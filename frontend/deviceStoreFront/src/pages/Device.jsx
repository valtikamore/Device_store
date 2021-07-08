import React, {useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import bigStar from '../assets/bigStar.png'

const DevicePage = observer(() => {
    const {device} = useContext(Context)
    const description = [
        {id:1,title:'RAM ',description:'5gb'},
        {id:2,title:'Camera',description:'48mp'},
        {id:3,title:'Processor',description:'Pentium 3'},
        {id:4,title:'Core count',description:'2'},
        {id:5,title:'Accumulator',description:'4000'},
        ]
    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image src={device.devices[0].img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.devices[0].name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{background:`url(${bigStar})no-repeat center center`,width:240,height:240,backgroundSize:'cover',fontSize:64}}
                        >
                            {device.devices[0].rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className=' d-flex flex-column align-items-center justify-content-around' style={{height:300,width:300,fontSize:32,border:`5px solid lightgray`}}>
                        <h3>from: {device.devices[0].price}$</h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                {description.map(el =>
                    <Row key={el.id} style={{background: el.id % 2 === 1 && 'lightgray',padding:10}}>
                        {el.title} : {el.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
});

export default DevicePage;

