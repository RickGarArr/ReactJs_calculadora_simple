import React, { useState } from 'react';

import './App.css';

import Result from './components/Result';
import NumberButtons from './components/NumberButtons.component';
import FunctionButtons from './components/FunctionButtons.component';
import OperationsButtons from './components/OperationsButtons.component';

export default function App() {

    const op = ["+", "-", "*", "/"];
    let [isCalculado, setCalculado] = useState(false);
    let [text, setText] = useState("0");

    return (
        <main className="contenedor">
            <h1 className="uppercase">Calculadora</h1>
            <div className="calculadora">
                <Result value={ text }/>
                
                <div className="body">

                    <NumberButtons onClickNumber={ number => addNumber(number) }/>
                    
                    <FunctionButtons
                        onContentClear={ clear => {
                            setText("0");
                            console.log(clear);
                        }}
                        onDelete={ delet => {
                            (text.length > 1 && isCalculado === false) ?  setText(text.slice(0, text.length - 1)) : setText("0");
                        } } />

                    <OperationsButtons
                        onClickOperation={ operation => addOperation(operation) }
                        onClickEqual={ equal => {
                            if (!op.includes(text.charAt(text.length -1))) {
                                // eslint-disable-next-line no-eval
                                setText(eval(text).toString().slice(0, 12));
                                setCalculado(true);
                            }
                        } }/>

                </div>

            </div>
        </main>
    );

    function addNumber(number) {
        if(text === "0" || isCalculado === true) {
            setText("");
            setText(number);
            setCalculado(false);
        } else if (text.length < 12 && isCalculado === false){
            setText(text + number);
        }
    }

    function addOperation(operation) {
        if (text === "0" && operation === "-") {
            setText(operation);
        } else if (text !== "0" && !op.includes(text.charAt(text.length - 1))){
            setText(text + operation);
        }
    }
}

/* con clase
export default class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { text: "0" };
    }

    render() {
        return (
            <main className="contenedor">
                <h1 className="uppercase">Calculadora</h1>
                <div className="calculadora">
                    <Result value={ this.state.text }/>
                    
                    <div className="body">
    
                        <NumberButtons onClickNumber={ number => this.addNumber(number) }/>
                        
                        <FunctionButtons
                            onContentClear={ clear => console.log("ContentClear", clear) }
                            onDelete={ delet => console.log("Delete", delet) } />
    
                        <OperationsButtons
                            onClickOperation={ operation => console.log("operation", operation) }
                            onClickEqual={ equal => console.log("equal", equal) }/>
    
                    </div>
    
                </div>
            </main>
        )
    }

    addNumber(num) {
        if (this.state.text === "0") {
            this.setState({text: num});
        } else {
            this.setState({text: this.state.text + num});; 
        }        
        console.log(this.state.text);
    }
}
*/