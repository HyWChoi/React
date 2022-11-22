import React, { useState, useCallback } from "react";
import "./ToDoList.css";
function ToDoList() {
  const [inputItem, setInputItem] = useState(""); // 입력창에 입력된 문자열
  const [editItem, setEditItem] = useState(""); // 수정창에 입력된 문자열
  const [itemList, setItemList] = useState([
    // to do list 목록
    { id: "1", value: "리액트 공부하기", isEdit: false },
    { id: "2", value: "점심 먹기", isEdit: false },
    { id: "3", value: "과제 하기", isEdit: false },
  ]);

  const EditToDoList = (item) => {
    // 수정창에 입력된 문자열을 to do list의 목록에 반영
    setItemList((prevItem) => {
      return prevItem.map((prevItem) => {
        if (prevItem.id === item.id && prevItem.isEdit === true) {
          // id가 같고, idEdit이 true일때
          return {
            ...prevItem, // 기존의 객체를 복사
            value: editItem, // 수정창에 입력된 문자열을 value에 대입
            isEdit: false, // isEdit을 false로 변경
          };
        } else if (prevItem.id === item.id && prevItem.isEdit === false) {
          // id가 같고, idEdit이 false일때
          return {
            ...prevItem, // 기존의 객체를 복사
            isEdit: true, // isEdit을 true로 변경
          };
        }
        return prevItem;
      });
    });
  };
  const DeleteToDoList = (id) => {
    // to do list의 목록에서 해당 id를 가진 항목을 삭제
    setItemList((itemList) => itemList.filter((item) => item.id !== id)); // id가 같지 않은 항목들만 남김
    console.log(itemList);
  };

  const AddToDoList = () => {
    setItemList((prevItem) => {
      // to do list의 목록에 입력창에 입력된 문자열을 추가
      console.log(itemList.length + 1, inputItem, itemList.isEdit);
      return [
        {
          id: itemList.length + 1, // id는 to do list의 목록의 길이+1
          value: inputItem, // 입력창에 입력된 문자열
          isEdit: false, // isEdit은 false
        },
        ...prevItem, // 기존의 객체를 복사
      ];
    });
    setInputItem(""); // 입력창에 입력된 문자열을 초기화
  };
  return (
    <div className="container">
      {" "}
      {/* to do list의 container */}
      <h1>To-Do List</h1>
      <div className="add-elements">
        <input
          id="add"
          value={inputItem}
          onChange={(event) => setInputItem(event.target.value)}
        />{" "}
        {/* 입력창 */}
        <button onClick={AddToDoList}> 할 일 추가 </button>{" "}
        {/* 입력창에 입력된 문자열을 to do list의 목록에 추가 */}
      </div>
      <div id="element-list">
        <ul id="list">
          {itemList.map((item) => {
            {
              /* to do list의 목록을 출력 */
            }
            return (
              <li key={item.id}>
                {item.isEdit === false ? (
                  item.value
                ) : (
                  <input
                    value={editItem}
                    onChange={(event) => setEditItem(event.target.value)}
                  />
                )}{" "}
                {/* isEdit이 false일때는 value를 출력, true일때는 수정창을 출력 */}
                <img
                  src="쓰레기통.pngpek160114_273"
                  alt="trash"
                  onClick={() => DeleteToDoList(item.id)}
                ></img>{" "}
                {/* to do list의 목록에서 해당 id를 가진 항목을 삭제 */}
                <img
                  c
                  src="연필.pngpek160114_273"
                  alt="수정"
                  onClick={() => EditToDoList(item)}
                ></img>{" "}
                {/* 수정창에 입력된 문자열을 to do list의 목록에 반영 */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
