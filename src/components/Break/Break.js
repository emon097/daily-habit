import React from "react";

const Break = (props) => {
  const { addBreak } = props;

  return (
    <div>
      <div className="main-break">
        <h3>Add Break</h3>
        <div className="break">
          <button className="single-btn">
            <span onClick={() => addBreak(10)}>10</span>m
          </button>
          <button className="single-btn">
            <span onClick={() => addBreak(20)}>20</span>m
          </button>
          <button className="single-btn">
            <span onClick={() => addBreak(30)}>30</span>m
          </button>
          <button className="single-btn">
            {" "}
            <span onClick={() => addBreak(40)}>40</span> m
          </button>
        </div>
      </div>
    </div>
  );
};

export default Break;
