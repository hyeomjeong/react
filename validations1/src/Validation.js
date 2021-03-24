import React, { useState } from 'react';
import './Validation.css';
const Validation = () => {

    const [ v_state, setVState ] = useState({
        password: "",
        clicked: false,
        validated: false,
    });
    const { password, clicked, validated } = v_state;

    const onChangePassword = (e) => {
        const inputData = {
            ...v_state,
            [e.target.name]: e.target.value
        }

        setVState(
            password => inputData
        );
    };

    const handleClick = () => {
        setVState({
            clicked: true,
            validated: password === '0000'
        });
    };

    return(
        <div>
            <input type="password" onChange={onChangePassword} placeholder="PASSWORD" name="password" className={clicked ? (validated ? "success" : "failure") : ''}></input>
            <button className="validation-btn" onClick={handleClick}>VALIDATION</button>
        </div>
    );
}

export default Validation;