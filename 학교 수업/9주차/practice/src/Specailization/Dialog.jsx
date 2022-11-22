import React from "react";
import "./Dialog.css"

function Dialog(props){
    const {title, NavBackgroundColor, children} = props;

    return (
        <div style={{
            margin: 30,
            width: "45rem",
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column"
        }}> {/* Dialog의 스타일 */}
            <div style={{
                width: "100%",
                height: "2rem",
                borderBottom: "1px solid lightgray",
                borderRadius: "8px 8px 0 0",
                backgroundColor: NavBackgroundColor || "white",
            }}> {/* Dialog의 Nav 스타일 */}
                <h3>{title}</h3>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
            }}> {/* Dialog의 Body 스타일 */}
                {children} {/* children은 Dialog의 자식요소들을 의미 */}
            </div>
        </div>
    );
}

export default Dialog;