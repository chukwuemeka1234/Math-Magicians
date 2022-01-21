import React, { useState } from 'react';
import '../index.css';
import calculate from '../logic/calculate';

const Calculator = (() => {
  const [state, setState] = useState({});

  function handleClick(e) {
    setState((state) => calculate(state, e.target.textContent));
  }

  const { next, total } = state;

  return (
    <div className="Calc-app">
      <div className="Calc-container">
        <div className="calc-display">
          <span className="span-calc">{ next || total || 0 }</span>
        </div>
        <div className="numbers">
          <button type="button" className="btn" onClick={handleClick}>
            AC
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            +/-
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            %
          </button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>
            ÷
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            7
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            8
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            9
          </button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>
            x
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            4
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            5
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            6
          </button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>
            -
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            1
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            2
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            3
          </button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>
            +
          </button>
          <button type="button" className="btn zero" onClick={handleClick}>
            0
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            .
          </button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
});

export default Calculator;
