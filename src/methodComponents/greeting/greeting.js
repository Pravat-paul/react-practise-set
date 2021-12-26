import React, { useState } from "react";
import GuestGreeting from "./guestGreeting";
import UserGreeting from "./userGreeting";

function Greeting(props) {

    const [isLogin, setIsLogin] = useState(false);

    const clickHandler = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="main">
            { isLogin ? <UserGreeting /> : <GuestGreeting /> }
            <button onClick={clickHandler}>{ !isLogin ? "Login" : "Logout" }</button>
        </div>
    );
}

export default Greeting;