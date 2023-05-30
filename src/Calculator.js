import './style.css';
import React, { useState } from 'react';


export const Calculator = () => {
 const [currentOperand, setCurrentOperand] = useState('')
 const [previousOperand, setPreviousOperand] = useState('')
 const [operation, setOperation] = useState('')
 
 const calculate = (a, b, op) => {
  switch(op) {
    case '+':
      return (parseFloat(a) + parseFloat(b));
    case '-':
      return (parseFloat(a) - parseFloat(b));
    case '*':
      return (parseFloat(a) * parseFloat(b));
    case '/':
      return parseFloat(a) / parseFloat(b);
    default:
      return null;
  }
 }
 const handleClick = (operand) => {
    setCurrentOperand(operand)
    switch(operand) {
      case 'AC':
       setCurrentOperand('')
       setPreviousOperand('')
       setOperation('')
       break;
    
    case '+/-':
      setCurrentOperand((parseFloat(currentOperand) * -1).toString())
      break;
    
    case '-':
      setOperation('-')
      setPreviousOperand(currentOperand)
      setCurrentOperand('')
      break;

    case '+':
      setOperation('+')
      setPreviousOperand(currentOperand)
      setCurrentOperand('')
      break;

    case '%':
      const percentage = (parseFloat(currentOperand) / 100).toString()
      setCurrentOperand(percentage.toString())
      setPreviousOperand(percentage.toString())
      setOperation('')
      break;
    
    case '/':
      setOperation('/')
      setPreviousOperand(currentOperand)
      setCurrentOperand('')
      break;  

    case '*':
      setOperation('*')
      setPreviousOperand(currentOperand)
      setCurrentOperand('')
      break;
    
    case '=':
    const result =  calculate(previousOperand, currentOperand, operation);
    if (result != null) { 
      setCurrentOperand(result.toString())
      setPreviousOperand(previousOperand + operation + currentOperand)
    }
      setOperation('')
      break;

     default:
      setCurrentOperand(currentOperand + operand)
      break;
  }

};
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand} {operation}</div>
      </div>
      <button onClick={() => handleClick('AC')}>AC</button>
      <button onClick={() => handleClick('+/-')}>+/-</button>
      <button onClick={() => handleClick('%')}>%</button>
      <button onClick={() => handleClick('/')}>&divide;</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('*')}>&times;</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button className="double-size-button" onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('=')}>=</button>
      </div>
  );
};