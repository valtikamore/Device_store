import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className={'m-1'}>
            {device.brands.map(el =>
                <Card key={el.id} className={'p-3 mr-1' }
                      style={{cursor:'pointer'}}
                      border={el.id === device.selectedBrand.id ? 'danger' : 'light'}
                      onClick={() => device.setSelectedBrand(el)}>
                    {el.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
