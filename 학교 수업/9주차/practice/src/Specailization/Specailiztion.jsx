import React from "react";
import Dialog from "./Dialog";
import DialogButton from "./Button";
/*     const {title, NavBackgroundColor, child} = props; */

function Specailiztion(){
    return (
        <> 
            <Dialog title="경고 다이얼로그" NavBackgroundColor="yellow"> {/* Dialog에 props를 전달 */}
                <p>오류가 발생할 위험이 있습니다. 계속 하시겠습니까?</p>
                <DialogButton text="중단" /> {/* DialogButton에 props를 전달 */}
                <DialogButton text="계속 진행..." /> {/* DialogButton에 props를 전달 */}
            </Dialog>
            <Dialog title="인사말 다이얼로그" NavBackgroundColor="whitesmoke">
                <p>안녕하세요!</p>
            </Dialog>
            <Dialog title="오류 다이얼로그" NavBackgroundColor="red">
                <p>씨불 ㅋ</p>
                <DialogButton text="오류 보고" />
                <DialogButton text="중단" />
            </Dialog>
            <Dialog title="공지사항 다이얼로그" NavBackgroundColor="skyblue">
                <ol type="disk"> {/* Dialog에 순서가 있는 리스트를 전달*/}
                    <li>공지 1</li>
                    <li>공지 2</li>
                    <li>공지 3</li>
                    <li>공지 4</li>
                    <li>공지 5</li>
                    <li>공지 6</li>
                    <li>공지 7</li>
                    <li>공지 8</li>
                    <li>공지 9</li>
                    <li>공지 10</li>
                </ol>
                <DialogButton text="확인" />
            </Dialog>
        </>
    )
}

export default Specailiztion;