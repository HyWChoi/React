import React from "react";
import "./Card.css"
function Card (props) {
    return(
    <div className="cardbody" style={props.color}> {/*카드의 배경색을 props로 받아옴*/}
        <img src={props.image} alt="사진" className="cardimg"></img> {/*카드의 이미지를 props로 받아옴*/}
        <h1 className="cardtitle">{props.title}</h1> {/*카드의 제목을 props로 받아옴*/}
        <p className="carddistance">{props.distance}Km 거리</p> {/*카드의 거리를 props로 받아옴*/}
    </div>
    );
}
export default Card;