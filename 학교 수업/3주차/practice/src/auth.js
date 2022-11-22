import React from "react";
const title = React.createElement("h1", null, "로그인");
const hr = React.createElement("hr");
const loginIDlabel = React.createElement("label", null, "사용자 ID:");
const loginID = React.createElement("input", {
  type: "text",
  placeholder: "이메일을 넣으세요",
});
const br = React.createElement("br");
const loginPWlabel = React.createElement("label", null, "비밀번호:");
const loginPW = React.createElement("input", {
  type: "password",
  placeholder: "비밀번호를 넣으세요",
}); /*createElement를 사용해 html요소들 제작*/
const loginButton = React.createElement("button", null, "완료");
function Auth() {
  return React.createElement(
    "div",
    null,
    title,
    hr,
    loginIDlabel,
    loginID,
    br,
    loginPWlabel,
    loginPW,
    loginButton
  ); /*createElement를 통해 div생성 뒤에 앞선 만든 요소들을 삽입해줌*/
}
export default Auth;
