import React from "react";

const ThemeContext = React.createContext("light");

function ContextApp(){
    return(
        <ThemeContext.Provider value = 'lavender'>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(){
    return (
        <div>
            <Themebutton />
        </div>
    )
}

function Themebutton(){
    return (
        <div>
            <Button />
        </div>
    )
}

function Button(){
    return (
        <ThemeContext.Consumer>
            {value => (<div style={{
            backgroundColor: value,
            margin: 50,
            padding: 50
        }}>
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button>
        </div>)}
        </ThemeContext.Consumer>
    )
}

export default ContextApp;