import React from 'react';
import ResultScreen from './ResultScreen';

const Calculator = () => (
  <div className="container">
    <ResultScreen />
    <div className="blocks">
      <div className="block-item">AC</div>
      <div className="block-item">+/-</div>
      <div className="block-item">%</div>
      <div className="block-item right-col">÷</div>
      <div className="block-item">7</div>
      <div className="block-item">8</div>
      <div className="block-item">9</div>
      <div className="block-item right-col">x</div>
      <div className="block-item">4</div>
      <div className="block-item">5</div>
      <div className="block-item">6</div>
      <div className="block-item right-col">-</div>
      <div className="block-item">1</div>
      <div className="block-item">2</div>
      <div className="block-item">3</div>
      <div className="block-item right-col">+</div>
      <div className="block-item zero">0</div>
      <div className="block-item">.</div>
      <div className="block-item right-col">=</div>
    </div>
  </div>
);

export default Calculator;
