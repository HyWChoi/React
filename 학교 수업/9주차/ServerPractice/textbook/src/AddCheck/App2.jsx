import React,{useState, useEffect} from "react";
import "../origin/App.css"

const serverURL = "http://localhost:65011/users"; //http://localhost:65011/users에서 데이터를 가져와서 출력하는 예제

function App2(){
    const [userData, setUserData] = useState(null); //userData라는 변수를 선언하고 null로 초기화
    const [userCheck, setUserCheck] = useState(null); //userCheck라는 변수를 선언하고 null로 초기화

    const getUserData = () => {
        fetch(serverURL)
        .then((res)=>res.json())
        .then((data)=>setUserData(data))
        .then(console.log(userData))
    }

    useEffect(getUserData,[]);

    const checkUser = (event) => { //checkUser라는 함수를 선언하고 event를 매개변수로 받음
        event.preventDefault(); //event의 기본동작을 막음
        getUserData(); //getUserData 함수를 실행
        const id = event.target.checkId.value;
        const passwd = event.target.checkPasswd.value;

        for (const prop in userData){ //userData의 속성을 하나씩 prop에 저장
            if (userData[prop].id === id && userData[prop].passwd === passwd){ 
                //만약 userData의 prop.id와 prop.passwd가 id와 passwd와 같다면
                return setUserCheck(true); //userCheck를 true로 설정
            }
            else setUserCheck(false); //아니라면 userCheck를 false로 설정
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit 버튼 클릭 후 서버로 POST 전송");
        fetch(serverURL, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, id, passwd})
        })
        .then(getUserData())
    }

    return (
        <>
            <div>
                <h2>회원 등록</h2>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" name="name" placeholder="이름" />
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="암호" />
                    <button type="submit"> 등록 </button>
                </form>
                <h2>회원 확인</h2>
                <form onSubmit={checkUser}>
                    <input type="text" name="checkId" placeholder="아이디" />
                    <input type="text" name="checkPasswd" placeholder="암호" />
                    <button type="submit"> 확인 </button>
                    {userCheck === null ? null : userCheck ? <p>회원으로 확인 되었습니다.</p> : <p>그런 회원은 없습니다.</p>}
                    {/* userCheck가 null이면 null을 출력하고, true면 회원으로 확인 되었습니다.를 출력하고, false면 그런 회원은 없습니다.를 출력 */}
                </form>            
                <div>
                    <p></p>
                </div>
                <div>
                    <h2>회원 목록</h2>
                    <ol>
                        {(userData === null)?
                    (<p>서버에서 데이터를 가져오는 중...</p>) :
                    (userData.map((user,i)=>(<li key={user.keyid}> {user.name} {user.id} {user.passwd}</li>)))
                    }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App2;