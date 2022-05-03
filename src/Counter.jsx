import { observer } from "mobx-react-lite";
import React from "react";
import "./App.css";
import counter from "./store/counter";

const Counter = () => {
  return (
    <div className="counter">
      {counter.total}
      <div className="btns">
        <button className="btn__plus" onClick={() => counter.increment()}>
          +
        </button>
        <button className="btn__minus" onClick={() => counter.decrement()}>
          -
        </button>
      </div>
    </div>
  );
};

export default observer(Counter);
