function loginCheck() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.value == "") {
    alert("오류: 사유: 사용자 이름을 입력하지 않았습니다.");
    return false;
  }
  if (password.value == "") {
    alert("오류: 사유: 비밀번호를 입력하지 않았습니다.");
    return false;
  }
  var usernameCheck = /^[a-z]{6,20}$/;
  if (!usernameCheck.test(username.value)) {
    alert("오류: 사유: 아이디는 6자 이상의 영문 소문자로 입력해주세요.");
    return false;
  }

  var pwdCheck = /^(?=.*[a-z])(?=.*[0-9]).{6,20}$/;
  if (!pwdCheck.test(password.value)) {
    alert(
      "오류: 사유: 비밀번호는 6자 이상의 영문 소문자와 숫자를 조합해주세요."
    );
    pwdCheck.focus();
    return false;
  }
  alert("성공");
  return true;
}
