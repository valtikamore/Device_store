import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className={'d-flex justify-content-center align-items-center'} style={{height:window.innerHeight - 54}}>

            <Card style={{width:600}} className={'p-5'}>
                <h2 className={'m-auto'}> {isLogin ? 'Authorization' : 'Login'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Entre your email'}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Entre your password'}
                    />
                    <Row className={'d-flex justify-content-between mt-3 pr-3 pl-3'}>
                        {isLogin
                            ?
                            <div className={'d-flex align-items-center'}>
                                don't have an account yet?<NavLink to={REGISTRATION_ROUTE} className={'ml-2'}> registr!</NavLink>
                            </div>
                        :
                            <div className={'d-flex align-items-center'}>
                               Have an account?<NavLink to={LOGIN_ROUTE} className={'ml-2'}> Login!</NavLink>
                            </div>}

                        <Button variant={'outline-success'}  >
                            {isLogin ?'Enter':'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
