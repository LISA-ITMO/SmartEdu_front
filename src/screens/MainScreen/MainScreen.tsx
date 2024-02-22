import React from "react";
import { useNavigate } from "react-router-dom";

function MainScreen() {
    const navigate = useNavigate()
    return (
        <button onClick={() => {navigate("/find_task")}}>Start</button>
    )
}

export default MainScreen