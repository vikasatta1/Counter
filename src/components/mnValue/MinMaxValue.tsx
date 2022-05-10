import React, {useState} from 'react';
import Button from "../button/Button";
import './minMaxValue.css'

const MinMaxValue = () => {
    /* если стартовое значение меньше нуля - подчеркнуть инпут красныс в экране счетчика incorrect value!
    *  если макс значение === стартовому тоже самое
    *
    * */
    let [maxValue,setMaxValue] = useState<number>(0)
    let [minValue,setMinValue] = useState<number>(0)
    console.log(minValue)
    const onChangeMax = (e:any) => {
        setMaxValue(e.currentTarget.value)
    }
    const onChangeMin = (e:any) => {
        setMinValue(e.currentTarget.value)
    }
    const setHandler = () => {

    }

    return (
        <div className={'counter__box'}>
            <div className={'value__container-mm'}>
                maxValue:   <input value={maxValue} onChange={onChangeMax}/>
            </div>
            <div className={'value__container-mm'}>
               minValue:   <input value={minValue} onChange={onChangeMin}/></div>
            <div>
                <Button name={'set'} onClick={setHandler}/>

            </div>
        </div>
    );
};

export default MinMaxValue;