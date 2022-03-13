import React, {useState} from 'react';
import {axiosRequest} from "./api";

const Request = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<[string, string]>(["", ""])

    const onClickHandler = () => {
        axiosRequest(isChecked)
            .then(res => {
                setResponse([res.data.errorText, res.data.info])
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setResponse([error.response.data.errorText, error.response.data.info])
            })
    }

    return (
        <div>
            <button onClick={onClickHandler}>click</button>
            <input type={"checkbox"} checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <div>{response[0]}</div>
            <div>{response[1]}</div>
        </div>
    );
};

export default Request;