import React, { useState, useEffect } from "react";

function ToggleE(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);
  //useState를 사용하여 isToggleOn을 true로 초기화

  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  //isToggleOn의 값을 반전시킨다.

  useEffect(() => {
    console.log(isToggleOn);
    console.log("토글 상태:", isToggleOn);
  });
  //isToggleOn의 값이 변경될 때마다 콘솔에 출력한다.

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "클릭A" : "클릭B"}
      {/* isToggleOn이 true이면 "클릭A"를 출력하고 false이면 "클릭B"를 출력한다. */}
    </button>
  );
}
export default ToggleE;
