import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Flex} from "../style/Flex";
import {Button} from "antd";

const Book = () => {
    const location = useLocation()
    const navigate = useNavigate();
    return (
        <Flex dir={'column'} style={{margin: '20px'}}>
            <div> typeBook {location.state.typeBook}</div>
            <div> id {location.state.id}</div>
            <Button onClick={() => navigate(-1)}>назад</Button>
        </Flex>
    )
};

export default Book;
