import React from "react";
function Auth() {
  return (
    <div>
      <h1>로그인</h1>
      <hr />
      <label>사용자 ID : </label>
      <input type="text" placeholder="이메일을 넣으세요" /><br/>
      <label>비밀번호 : </label>
      <input type="password" placeholder="비밀번호를 넣으세요" />
      <button>로그인</button>
    </div>
  );
}
export default Auth;