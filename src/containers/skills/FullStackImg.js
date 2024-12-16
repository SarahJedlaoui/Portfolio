import React from "react";
import img from "../../assests/images/code3.svg";
import "./full.css";
export default function FullStackImg(props) {
  const theme = props.theme;
  return <img src={img} alt="Feeling Proud" className="feeling-proud-img" />;
}
