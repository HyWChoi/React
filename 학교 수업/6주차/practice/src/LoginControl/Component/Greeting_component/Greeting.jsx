import React from "react";
import GuestGreeting from "./GuestGreeing";
import UserGreeting from "./UserGreeting";
function Greeting(props){
 
    //props로 isLoggedIn을 받아온다.
 
    const isLoggedin = props.isLoggedin;
 
    //isLoggedIn이 true이면 UserGreeting을 출력하고 false이면 GuestGreeting을 출력한다.
    if (isLoggedin) return <UserGreeting />
    else return <GuestGreeting />;
}
export default Greeting;