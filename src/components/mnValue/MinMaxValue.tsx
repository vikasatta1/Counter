import React, {ChangeEvent} from 'react';
import Button from "../button/Button";
import './minMaxValue.css'

type MinMaxPropsType = {
    maxValue: any,
    minValue: any
    onChangeMax: (e:ChangeEvent<HTMLInputElement>) => void,
    onChangeMin: (e:ChangeEvent<HTMLInputElement>) => void,
    setHandler: () => void,
    functionSet:()=> void
}
const MinMaxValue = (props: MinMaxPropsType) => {


    return (
        <div className={'counter__box'}>
            <div className={'value__container-mm'}>
                maxValue: <input value={props.maxValue} onChange={props.onChangeMax}/>
            </div>
            <div className={'value__container-mm'}>
                minValue: <input value={props.minValue} onChange={props.onChangeMin}/></div>
            <div>
                <Button name={'set'} onClick={props.functionSet}/>

            </div>
        </div>
    );
};

export default MinMaxValue;