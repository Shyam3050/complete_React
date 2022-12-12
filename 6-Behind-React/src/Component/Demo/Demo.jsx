import React from "react";
import MyPara from "./MyPara";

function Demo(props) {
    // console.log("demo");
  return <MyPara> {props.show ? "Paragraph" : ""}</MyPara>;
}

export default React.memo(Demo);
