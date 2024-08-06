import Styles from "../Certifications/Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <>
      <animated.div
        className={Styles.card}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={props.imagen} alt="" />
        <p style={{ color: "var(--qualification-color-p)" }}>
          {props.duration}
        </p>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <div className={Styles.btnn}>
          <a href={`${props.viewImage}`} target="_blank" className="a">
            <button type="button" className="btn btn-dark">
              View Certificate
            </button>
          </a>
        </div>
      </animated.div>
    </>
  );
}

export default Card;
