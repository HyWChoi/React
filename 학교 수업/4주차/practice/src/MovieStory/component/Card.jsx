import React from "react";
import "./Card.css"
function Card(props) {
  return (
    <div className="body" style={props.color}> {/* 카드 몸체 */}
      <img src={props.img} alt="movieposter" className="img"></img> {/* 영화 포스터 */}
      <div className="cardcontent"> {/* 카드 내용 */}
        <p className="title">{props.title}<small className="font year">{props.year}</small></p> {/* 영화 제목 */}
        <p className="font">{props.genre}</p> {/* 영화 장르 */}
        <p className="font">{props.summary}</p> {/* 영화 줄거리 */}
      </div>
    </div>
  );
}
export default Card;