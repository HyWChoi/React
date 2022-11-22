import React from "react";
import Card from "../../../../Card";
import "./ProfileCard.css"

function ProfileCard(){
    return(
        <Card title="Inje Lee" backgroundColor="#4ae04e">
            <p>이 부분은 현재 Card 엘리먼트에 포함된 하위 엘리먼트 ( = child ) 입니다.</p>
            <p>이 부분도 child element 입니다.</p>
            <p>여러 개의 하위 엘리먼트를 이런식으로 합성할(포함시킬) 수 있습니다.</p>
            <p>해결 가능</p>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ol>
        </Card>
    )
}

export default ProfileCard;