import React from "react";

const Winner = () => {
  return (
    <div className="winner-container">
      You Won
      <button
        onClick={() => {
          window.location.reload(true);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Winner;
