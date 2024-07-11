import React from 'react';
import {HeaderWrapper} from "./style/style";
import {Link, NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <HeaderWrapper>
            <Link to="/" target="_blank">Home</Link> 🐣
            <Link to="/scroll" >Scroll</Link>🐣
            <Link to="/navigate" >UseNavigate</Link>🐣
            <Link to="/uselocation" >UseLocation</Link>🐣
            <Link to="/usesearchparam" >UseSearchParam</Link>🐣
            {/*<NavLink     style={({isActive}) => ({color: isActive ? "red" : "black"})} to="/" target="_blank">Home</NavLink> 🐣*/}
            {/*<NavLink     style={({isActive}) => ({color: isActive ? "red" : "black"})}to="/scroll" >Scroll</NavLink>🐣*/}

        </HeaderWrapper>
    );
};

