import React, { useState } from "react";
import "./Counter.css";

function Count() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => Number(prev || 0) + 1);
  const decrement = () => setCounter((prev) => Number(prev || 0) - 1);
  const reset = () => setCounter(0);

  const numericValue = Number(counter) || 0;
  const displayClass =
    "count-display" +
    (numericValue > 0 ? " positive" : numericValue < 0 ? " negative" : "");

  return (
    <div className="demo-card">
      <div className="card-head">
        <h2>Counter</h2>
        <span className="file-tag mono">Counter.jsx</span>
      </div>

      <div className="card-body">
        <div className={displayClass}>
          <span>{counter}</span>
        </div>

        <div className="count-actions">
          <button className="btn-increment" onClick={increment}>
            Increment
          </button>
          <button className="btn-decrement" onClick={decrement}>
            Decrement
          </button>
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="state-strip">
        <span className="state-label mono">state</span>
        <span className="state-value mono">{`{ counter: ${JSON.stringify(counter)} }`}</span>
      </div>
    </div>
  );
}

export default Count;