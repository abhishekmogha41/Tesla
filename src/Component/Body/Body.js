import React from "react";
import "./Body.css";

function body(props) {
  return (
    <>
      <section>
        <div
        // style={{
        //   backgroundImage: `url(${props.background})`,
        // }}
        >
          <div className="carName">
            <img src={props.background} alt="" />
            <h1>{props.name}</h1>
            <a href="/">
              <p className="section_para"> {props.para}</p>
            </a>
          </div>

          <div className="buttons mb-2">
            <div className="button-group">
              <a href="/">{props.leftbtn}</a>
              {props.rightBtn && <a href="/">{props.rightbtn}</a>}
            </div>
          </div>
          <div>
            <img
              className="down-arrow"
              src="images/down-arrow.svg"
              alt="down-arrow"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default body;
