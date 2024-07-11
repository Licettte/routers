import React from 'react';
import { useNavigate} from "react-router-dom";
import {Button} from "antd";

export const TestUseLocation = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(`course/${2}?name=React&value=Router`, {state: {id: 2, course: 'шо то про react router'} });
    };

    return (
        <div style={{margin: '20px'}}>
            <Button onClick={navigateTo}> жмяк-жмяк </Button>
        </div>
    );
};

