import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            Price<span>1200 $</span>
          </p>
        </div>
        <div>
          <p>
          Purchase <span>Now</span>
          </p>
        </div>
      </div>

      <div className="card_main_button">
        <a href="#" className="button btn">
          Details
        </a>
        <a href="#" className="button2 btn">
          Features  
        </a>
      </div>
    </div>
  );
}

export default CardMain;
