import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>

                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Buy_-_Device</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}>Login</Button>
                        <Button variant={'outline-light'} className={'ml-2'} onClick={() => user.setIsAuth(false)}>Admin panel</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }

        </Container>
        </Navbar>

    );
});

export default NavBar;
