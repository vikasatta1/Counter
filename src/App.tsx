import React from 'react';
import './index.css';
import './App.css'
import Counter from "./components/counter/Counter";
import MinMaxValue from "./components/mnValue/MinMaxValue";

function App() {


    return (
        <div className={'container'}>
            <Counter/>
            <MinMaxValue/>
        </div>
    );
}

export default App;
