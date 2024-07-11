import React from 'react';
import {BlueDiv, GreenDiv, RedDiv} from "../../style/style";
import {Flex} from "../../style/Flex";

export const ItemScroll = () => {
    return (
        <Flex dir='column'>
            <GreenDiv style={{background: "green"}}>1</GreenDiv>
            <RedDiv style={{background: "red"}}> 2</RedDiv>
            <BlueDiv style={{background: "blue"}}>3 </BlueDiv>
            <GreenDiv style={{background: "green"}}>4</GreenDiv>
            <RedDiv style={{background: "red"}}> 5</RedDiv>
            <BlueDiv style={{background: "blue"}}>6 </BlueDiv>
            <span style={{fontSize: '25px'}}>Мы перешли на другую страниуцу, но остались внизу</span>
        </Flex>
    );
};

