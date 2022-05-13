import React, {useState} from 'react';
import './index.css';
import './App.css'
import Counter from "./components/counter/Counter";
import MinMaxValue from "./components/mnValue/MinMaxValue";

export type TextType = `enter value and press 'set'` | `Incorrect value!`

function App() {

    const [maxValue,setMaxValue] = useState<number>(0)
    const [startValue,setStartValue] = useState<number>(0)

    let [count, setCount] = useState<number>(0)
    const [text, setText] = useState<TextType>(`enter value and press 'set'`)

    const [activeMaxValue, setActiveMaxValue] = useState<boolean>(true)
    const [activeMinValue, setActiveMinValue] = useState<boolean>(true)

    const increment = () => {
            setCount(++count )

        }

    const reset = () => {setCount(0)}
    const  functionSet = () => {
        setStartValue(1)
        setMaxValue(10)
    }


    let disable = false
    if (count === 5) disable = true

    /* если стартовое значение меньше нуля - подчеркнуть инпут красным в экране счетчика incorrect value!
    *  если макс значение === стартовому тоже самое
    *
    * */

    const onChangeMax = (e:any) => {
        setMaxValue(e.currentTarget.value)
    }
    const onChangeMin = (e:any) => {
        setStartValue(e.currentTarget.value)
    }
    const setHandler = () => {
        setCount(startValue)
    }

    return (
        <div className={'container'}>
            <Counter  disable={disable} count={count} reset={reset} increment={increment}/>
            <MinMaxValue maxValue={maxValue} minValue={startValue} onChangeMax={onChangeMax} onChangeMin={onChangeMin} setHandler={setHandler} functionSet={functionSet}/>
        </div>
    );
}

export default App;
