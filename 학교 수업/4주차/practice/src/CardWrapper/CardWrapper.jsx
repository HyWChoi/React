import React from "react";
import { CardContents } from "./info";
import Card from "./Card";
import "./CardWrapper.css"
function CardWrapper(){
    return(
    <div className="wrapper"> {/* 카드를 감싸는 div */}
        {CardContents.map((CardContent) => ( //map 함수를 사용하여 CardContents의 각 요소를 Card에 전달
        <Card 
        image={CardContent.img} //Card에 전달할 props
        color={CardContent.color}
        title={CardContent.title}
        distance={CardContent.distance} 
    /> 
    ))}   
    </div>);
}
export default CardWrapper;