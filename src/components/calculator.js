import React, { Component } from 'react';
import '../index.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="Calc-app">
        <div className="Calc-container">
          <div className="calc-display">
            <span className="span-calc">{ next || total || 0 }</span>
          </div>
          <div className="numbers">
            <button type="button" className="btn" onClick={this.handleClick}>
              AC
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              +/-
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              %
            </button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>
              ÷
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              7
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              8
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              9
            </button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>
              x
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              4
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              5
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              6
            </button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>
              -
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              1
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              2
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              3
            </button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>
              +
            </button>
            <button type="button" className="btn zero" onClick={this.handleClick}>
              0
            </button>
            <button type="button" className="btn" onClick={this.handleClick}>
              .
            </button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
