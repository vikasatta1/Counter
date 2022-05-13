import React, {useState} from 'react';
import Button from "../button/Button";
import './couneter.css'
type propsCounterType = {
    disable:boolean,
    count: number | null,
    increment: ()=> void
    reset:()=> void
}
const Counter = (props:propsCounterType) => {
    return (
        <div className={'counter__box'}>
            <div className={props.disable ? 'red' : 'value__container'}>{props.count}</div>
            <div>
                <Button name={'increment'} onClick={props.increment} disable={props.disable}/>
                <Button name={'reset'} onClick={props.reset}/>
            </div>
        </div>
    );
};

export default Counter;