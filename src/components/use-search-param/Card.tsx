import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Button} from "antd";

const Card = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const food = searchParams.get('food')
    const cat = searchParams.get('cat')

    useEffect(() => {
        console.log(food, cat)
    }, [food, cat]);

    return (
        <div style={{margin: '20px'}}>
            <p>'food' {food}   </p>
            <p>'cat' {cat}   </p>
            <Button onClick={() => setSearchParams({food: 'meeeat', cat: 'nooo food'})}>
                изменить параметры
            </Button>
        </div>
    );
};

export default Card;
