import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>

      <div className="earning">
        <p>
          New Laptops <span>187</span>
        </p>

        <p>
          Trending <span>5</span>
        </p>

        <p>
          Popular <span>25</span>
        </p>

        <p>
          Buisness <span>200</span>
        </p>

        <p>
          Gaming <span>262</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
