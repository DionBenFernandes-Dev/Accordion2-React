import React, { useState } from "react";
import Typed from "react-typed";
import "../App.css";
// import questions from "../Data/data";

const TypedWord = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={"heading" + id}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + id}
          aria-expanded="false"
          aria-controls={"collapse" + id}
          onClick={() => setShowInfo(!showInfo)}
        >
          <Typed
            strings={[title]}
            typeSpeed={50}
            backDelay={1500}
            backSpeed={10}
            loop={!showInfo}
          />
        </button>
      </h2>
      <div
        id={"collapse" + id}
        class="accordion-collapse collapse "
        aria-labelledby={"heading" + id}
      >
        <div class="accordion-body">
          <strong>
            {showInfo && <Typed strings={[info]} typeSpeed={20} />}
          </strong>
        </div>
      </div>
    </div>
  );
};
export default TypedWord;
