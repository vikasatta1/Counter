import React from 'react';
import './button.css'
type buttonPropsType = {
    name:string
    onClick?:()=>void
    disable?:boolean
}

const Button = (props:buttonPropsType) => {
    return (
        <button className={'btn btn-primary'} onClick={props.onClick} disabled={props.disable}>{props.name}</button>
    );
};

export default Button;