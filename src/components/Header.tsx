import React from 'react';
import {HeaderWrapper} from "../style/style";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <HeaderWrapper>
            <Link to="/" target="_blank">Home</Link> 🐣
            {/*<Link to="/course">Course</Link> 🐣*/}
            <Link to="/scroll" >Scroll</Link>🐣
            <Link to="/replace" >Replace</Link>
        </HeaderWrapper>
    );
};

