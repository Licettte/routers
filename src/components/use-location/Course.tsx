import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Flex} from "../style/Flex";

export  const Course = () => {
    const location = useLocation();
    const param=   useParams()

    console.log(param, "param")
    console.log(location, "location")

    return (
        <Flex dir={'column'} style={{margin: '20px'}}>
            <div><span style={{fontWeight: '600', color: "blue"}}>location.state.course  </span>{location.state.course}
            </div>
            <div><span style={{fontWeight: '600', color: "blue"}}>location.pathname </span> {location.pathname}</div>
            <div><span style={{fontWeight: '600', color: "blue"}}>location.key </span>{location.key}</div>
            <div><span style={{fontWeight: '600', color: "blue"}}>location.search </span>{location.search}</div>

            ......
            <div><span style={{fontWeight: '600', color: "blue"}}> useParams()  </span> {param.id}</div>

        </Flex>
    );
};
