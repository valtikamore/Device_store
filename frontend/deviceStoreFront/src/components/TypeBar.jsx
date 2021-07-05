import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(el =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    key={el.id}
                    active={el.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(el)}
                >
                    {el.name[0].toUpperCase() + el.name.slice(1)}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
