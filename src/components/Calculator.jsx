import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ResultScreen from './ResultScreen';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  return (
    <div className="calc-section-container">
      <h2>Let&apos;s do some math !</h2>
      <div className="calc-container">
        <ResultScreen
          data={calculatorData.next || calculatorData.total || '0'}
        />
        <div className="blocks">
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="block-item right-col"
            onClick={() => handleClick('÷')}
          >
            ÷
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="block-item right-col"
            onClick={() => handleClick('x')}
          >
            x
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="block-item right-col"
            onClick={() => handleClick('-')}
          >
            -
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="block-item right-col"
            onClick={() => handleClick('+')}
          >
            +
          </button>
          <button
            type="button"
            className="block-item zero"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="block-item"
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            type="button"
            className="block-item right-col"
            onClick={() => handleClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
