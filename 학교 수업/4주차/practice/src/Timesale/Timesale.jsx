import React from "react";
import "./Timesale.css";
import { items, state } from "./Stuffs";
function getDeadline(endDate) {
  let dead = new Date(endDate); /*마감시간을 설정*/
  let currunt = new Date(); /*현재시간을 설정*/
  let deadline =
    dead.getTime() - currunt.getTime(); /*마감시간과 현재시간의 차이를 구함*/
  let hour = Math.floor(deadline / (1000 * 60 * 60)); /*시간을 구함*/
  let min = Math.floor(
    (deadline % (1000 * 60 * 60)) / (1000 * 60)
  ); /*분을 구함*/
  let sec = Math.floor(
    ((deadline % (1000 * 60 * 60)) % (1000 * 60)) / 1000
  ); /*초를 구함*/
  return (
    hour.toString(10) + ":" + min.toString(10) + ":" + sec.toString(10)
  ); /*시간:분:초 형태로 반환*/
}
function Card(props) {
  {
    /*카드를 만들어주는 함수*/
  }
  return (
    <div className="card">
      {" "}
      {/*카드를 만들어줌*/}
      <img src={props.img} className="cardimg" alt="product"></img>{" "}
      {/*이미지를 넣어줌*/}
      <div className="cardbody">
        {" "}
        {/*카드의 내용을 넣어줌*/}
        <h2 className="cardtime">{props.time} 마감예정!</h2>{" "}
        {/*마감시간을 넣어줌*/}
        <h1 className="cardtitle">{props.title}</h1> {/*제목을 넣어줌*/}
        <p className="carddescription">
          {" "}
          {/*설명을 넣어줌*/}
          {props.description.length > 100
            ? props.description.slice(0, 100) + "..."
            : props.description}{" "}
          {/*설명이 100자 이상이면 100자까지만 표시하고 나머지는 ...으로 표시*/}
        </p>
        <h3 className="cardprice">
          {" "}
          {/*가격을 넣어줌*/}
          <del style={{ color: "gray", fontSize: "1.3rem" }}>
            {" "}
            {/*원래 가격을 취소선으로 표시*/}
            {props.oldprice} {/*원래 가격을 넣어줌*/}
          </del>{" "}
          {props.price} {/*할인된 가격을 넣어줌*/}
        </h3>
        {state[props.index] == true ? (
          <button
            onClick={() => {
              state[props.index] = false;
            }} /*버튼을 누르면 state의 값이 false로 바뀜*/
            className="cardbutton"
          >
            {/*버튼을 만들어줌*/}
            긴급구매
          </button>
        ) : (
          <h1 className="cardsuccess">구매 성공!!!</h1>
        )}
        {/*state의 값이 true이면 긴급구매를 표시하고 true이면 긴급구매를 표시 false이면 구매 성공!!!을 표시*/}
      </div>
    </div>
  );
}
function Timesale(props) {
  /*카드를 만들어주는 함수*/
  return (
    <div className="wrapper">
      {/*카드를 감싸는 div를 만들어줌*/}
      {items.map((item /*items의 값을 하나씩 item에 넣어줌*/) => (
        <Card
          img={item.img}
          time={getDeadline(item.time)}
          title={item.title}
          description={item.description}
          oldprice={item.oldprice}
          price={item.price}
          index={item.index}
        ></Card> /*Card함수에 img, time, title, description, oldprice, price, index를 넣어줌*/
      ))}
    </div>
  );
}
export default Timesale;
