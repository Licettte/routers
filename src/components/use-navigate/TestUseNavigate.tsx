import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {Flex} from "../style/Flex";

const TestUseNavigate = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`book/${7}`, {state: {id: 7, typeBook: 'paper'} });
    };

    const navigateWithoutSave= () => {
        navigate(`book/${7}`, {state: {id: 7, typeBook: 'paper'},  replace: true });
    };
    return (
        <Flex style={{margin: '20px'}} dir={'column'}>
            <Button onClick={navigateTo}> нажми сюда, можно не нажимать </Button>
            <Button onClick={navigateWithoutSave}> и сюда тоже нажми </Button>

        </Flex>
    );
};

export default TestUseNavigate;
