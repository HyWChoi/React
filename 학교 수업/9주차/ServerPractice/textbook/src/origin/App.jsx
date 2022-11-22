import React,{useState, useEffect} from "react";
import "./App.css"

const serverURL = "http://localhost:65010/users"; // http://localhost:65010/users 에서 데이터를 가져온다.

function App(){
    const [userData, setUserData] = useState(null); // 서버에서 받아온 데이터를 저장할 변수

    const getUserData = () => { // 서버에서 데이터를 가져오는 함수
        fetch(serverURL) // 서버에서 데이터를 가져온다.
        .then((res)=>res.json()) // 가져온 데이터를 json 형식으로 변환한다.
        .then((data)=>setUserData(data)) // 변환한 데이터를 userData에 저장한다.
        .then(console.log(userData)) // userData를 콘솔에 출력한다.
    }

    useEffect(getUserData,[]); // 마운트 될 때 getUserData 함수를 실행한다.

    const onSubmitHandler = (event) => { // 서버에 데이터를 보내는 함수
        event.preventDefault(); // 페이지가 새로고침 되는 것을 방지한다.
        const name = event.target.name.value; // name 값을 가져온다.
        const id = event.target.id.value; // id 값을 가져온다.
        const passwd = event.target.passwd.value; // passwd 값을 가져온다.
        console.log("Submit 버튼 클릭 후 서버로 POST 전송"); 

        fetch(serverURL, { 
            method:'POST', // 서버로 데이터를 보낸다.
            headers: { // 서버로 보낼 데이터의 형식을 지정한다.
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, id, passwd}) // 서버로 보낼 데이터를 지정한다.
        })
        .then(getUserData()) // 서버로 데이터를 보낸 후 getUserData 함수를 실행한다.
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
                <div>
                    <p></p>
                </div>
                <div>
                    <h2>회원 목록</h2>
                    <ol>
                        {(userData === null)?
                    (<p>서버에서 데이터를 가져오는 중...</p>) :
                    (userData.map((user,i)=>(<li key={user.keyid}> {user.name} {user.id} {user.passwd}</li>)))
                    } {/* userData가 null이면 "서버에서 데이터를 가져오는 중..."을 출력하고, null이 아니면 userData를 출력한다. */}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;