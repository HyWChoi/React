import React from "react";

function DialogButton(props){
    const {text} = props;
    return(
    <button>
        {text} {/* text라는 props를 받아서 출력 */}
    </button>
    );
}

export default DialogButton;