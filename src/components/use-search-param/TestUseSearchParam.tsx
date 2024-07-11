import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button} from "antd";

export  const TestUseSearchParam = () => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`card/${7}?food=iceCream&cat=Grisha`);
    };

    return (
        <div>
            <Button onClick={navigateTo} style={{margin: '20px'}}> тык </Button>
        </div>
    );
};

