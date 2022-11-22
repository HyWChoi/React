import React,{useState} from "react";
import "./PassingCount.css";
const FirstChild = (props) => {
    console.log(`자식 1 ${props.data}`);  
    return (
    <div className="first">
        <p>자식 1 컴포넌트</p> 
        <p>(카운터:{props.data})</p> {/* 자식 1 컴포넌트에 props로 전달된 데이터를 출력*/}
    </div>
    ); 
}
const SecondChild = (props) => {
    // 왼쪽 버튼 클릭시 왼쪽 카운트 증가
    const onLeftClick = () => props.setLeft((prevData)=>parseInt(prevData)+1);
    // 오른쪽 버튼 클릭시 오른쪽 카운트 증가
    const onRightClick = () => props.setRight((prevData)=>parseInt(prevData)+1); 

    console.log("자식 2 (버튼)")
    return (
        <div className="second">
            <p>자식 2 컴포넌트</p>
            <button onClick={onLeftClick}>⬅️ 카운터++</button>
            <button onClick={props.resetData}>카운터 0</button>{/* 자식 2 컴포넌트에 props로 전달된 함수를 실행*/}
            <button onClick={onRightClick}>카운터++ ➡️</button>
        </div>
    );
}

const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`)
    return (
        <div className="third">
            <p>자식3 컴포넌트</p>
            <p>(카운터:{props.data})</p> {/* 자식 3 컴포넌트에 props로 전달된 데이터를 출력*/}
        </div>
    )
}

function PassingCount(){ // 부모 컴포넌트
    const [leftCount, setLeftCount] = useState(0); // 왼쪽 카운터
    const [ringtCount, setRightCount] = useState(0); // 오른쪽 카운터
    const resetData = () => {setLeftCount(0);setRightCount(0);} // 카운터 초기화 함수

    return (
        <div className="parent">
            부모컴포넌트
            <br />
            (왼쪽 카운트:{leftCount}, 오른쪽 카운트:{ringtCount}){/*state로 관리되는 데이터를 출력*/}
            <div className="layout">
                <FirstChild data={leftCount}/> {/* 자식 1 컴포넌트에 데이터를 전달*/}
                <SecondChild 
                    setLeft={setLeftCount}
                    setRight={setRightCount}
                    resetData={resetData} /> {/* 자식 2 컴포넌트에 함수를 전달*/}
                <ThirdChild data={ringtCount} /> {/* 자식 3 컴포넌트에 데이터를 전달*/}
            </div>
        </div>
    )
}

export default PassingCount;