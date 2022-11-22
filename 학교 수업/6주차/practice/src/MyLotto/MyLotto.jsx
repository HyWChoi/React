import React,{useRef,useEffect} from "react";
function MyLotto(){
 
    //useRef를 사용하여 ref를 선언한다.
    const numOfLotto = useRef(1);
 
    //useEffect를 사용하여 ref의 값이 변경될 때마다 콘솔에 출력한다.
    const handler = (str, event) => {
        console.log(numOfLotto.current.toString()+"회차"+str+event.target.value);
        alert(numOfLotto.current.toString()+"회차"+str+event.target.value);
        numOfLotto.current = numOfLotto.current + 1;
    };
 
    //useEffect를 사용하여 렌더링이 완료된 후 콘솔에 출력한다.
    useEffect(()=>{
        console.log(">>> 렌더링되었습니다 !!!")
    });
 
    //useEffect를 사용하여 마운트 언마운트 시점에 콘솔에 출력한다.
    useEffect(()=>{
        console.log(">>> 마운트되었습니다 !!!")
        return console.log(">>> 언마운트되었습니다 !!!");
    },[]);
 
    return(
        <button value="홍길동" onClick={(event)=>{handler("당첨자",event)}}>
            당첨자확인
        </button>
    )
}
export default MyLotto;