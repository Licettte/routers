import React from 'react';
import {Link} from "react-router-dom";
import {BlueDiv, GreenDiv, RedDiv} from "../../style/style";
import {Button} from "antd";
import {Flex} from "../../style/Flex";

export const TestScroll = () => {
    return (
        <Flex dir='column' style={{ fontSize: '25px', margin: '10px'}}>
           <span >Пролистать вниз</span>
            <GreenDiv>1</GreenDiv>
            <RedDiv> 2</RedDiv>
            <BlueDiv>3 </BlueDiv>
            <GreenDiv>4</GreenDiv>
            <RedDiv> 5</RedDiv>
            <BlueDiv>6 </BlueDiv>
            <Link to="/itemScroll" className="btn" preventScrollReset>
            <Button> click me </Button>
            </Link>
        </Flex>
    );
};
