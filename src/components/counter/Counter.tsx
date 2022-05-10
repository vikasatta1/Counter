import React, {useState} from 'react';
import Button from "../button/Button";
import './couneter.css'

const Counter = () => {
    let [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(++count)
    }
    const reset = () => {
        setCount(0)
    }

    let disable = false
    if (count === 5) disable = true

    return (
        <div className={'counter__box'}>
            <div className={disable ? 'red' : 'value__container'}>{count}</div>
            <div>
                <Button name={'increment'} onClick={increment} disable={disable}/>
                <Button name={'reset'} onClick={reset}/>
            </div>
        </div>
    );
};

export default Counter;