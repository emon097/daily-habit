import React from "react";

const Break = (props) => {
  const { addBreak } = props;
  return (
    <div>
      <div className="main-break">
        <h3>Add Break</h3>
        <div className="break">
          <button onClick={() => addBreak(10)} className="single-btn">
            <span>10</span>m
          </button>
          <button onClick={() => addBreak(20)} className="single-btn">
            <span>20</span>m
          </button>
          <button onClick={() => addBreak(30)} className="single-btn">
            <span>30</span>m
          </button>
          <button onClick={() => addBreak(40)} className="single-btn">
            {" "}
            <span>40</span> m
          </button>
        </div>
      </div>
    </div>
  );
};

export default Break;
