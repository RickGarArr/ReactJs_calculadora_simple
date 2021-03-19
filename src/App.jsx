import React from 'react';

import './App.css';

import Result from './components/Result';
import NumberButtons from './components/NumberButtons.component';
import FunctionButtons from './components/FunctionButtons.component';
import OperationsButtons from './components/OperationsButtons.component';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.numero = "0";
    }
    render() {
        return (
            <main className="contenedor">
                <h1 className="uppercase">Calculadora</h1>
                <div className="calculadora">
                    <Result value={ this.numero }/>
                    
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
        if (this.numero === "0") {
            this.numero = num;
        } else {
            this.numero += num; 
        }        

        console.log(this.numero);
    }
}