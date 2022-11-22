import React,{useState,useRef} from "react";
import LoginButton from "./component/Login_component/LoginButton";
import LogoutButton from "./component/Login_component/LogoutButton";
import Greeting from "./component/ Greeting_component/Greeting";
import "./LoginControl.css";
function LoginControl(){
 
    //useState를 사용하여 isLoggedIn을 false로 초기화
    const [isLoggedin,setIsLoggedin] = useState(false);
 
    //useRef를 사용하여 numOfClick을 생성
    const numOfClick = useRef(0);
   
    //isLoggedIn을 true로 설정하고 numOfClick의 값을 1 증가시킨다.
    const handleLoginClick = ()=>{
        setIsLoggedin(true);
        numOfClick.current += 1;
    };
 
    //isLoggedIn을 false로 설정하고 numOfClick의 값을 1 증가시킨다.
    const handleLogoutClick = ()=>{
        setIsLoggedin(false);
        numOfClick.current += 1;
    };
 
    //who를 선언하고 초기값을 ""로 설정
    const [who,setWho] = useState("");
 
    //who의 값을 입력받은 값으로 설정
    const onChange = (e)=>{
        setWho((who)=>document.getElementById("myWho").value);
    }
 
    //who의 값을 ""로 초기화
    const onReset = (e)=>{
        setWho("");
    }
 
    // 버튼을 할당할 변수를 선언
    let button;
 
    //isLoggedIn이 true이면 LogoutButton을, false이면 LoginButton을 button에 할당
    if (isLoggedin) { 
        button = <LogoutButton onClick={handleLogoutClick} />;
    }
    else {
        button = 
        <div>
            <input onChange={onChange} value={who} id="myWho" size="8" maxLength="8"/>
            <LoginButton onClick={(()=>{handleLoginClick();onReset();})}/>
        </div>;
    }
 
    //isLogged와 numOfClick의 값을 출력
    console.log("State of isLogged", `${isLoggedin}`);
    console.log("State of numberOfClick", `${numOfClick.current}`);
 
    return (
        <div>
            <div className="login">
                <Greeting isLoggedin={isLoggedin} /> {button}
            </div>{who}
        </div>
    )
}
export default LoginControl;