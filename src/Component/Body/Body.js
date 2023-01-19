import React from "react";
import "./Body.css";

function body(props) {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${props.background})`,
          // backgroundPosition: `center`,
        }}
      >
        <div className="carName">
          <h1>{props.name}</h1>
          <a href="/">
            <p className="section_para"> {props.para}</p>
          </a>
        </div>

        <div className="buttons mb-2">
          <div className="button-group">
            <a href="/">
              {" "}
              <button>{props.leftbtn}</button>
            </a>

            {props.rightbtn ? (
              <a href="/">
                {" "}
                <button>{props.rightbtn}</button>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <img
            className="down-arrow"
            src="images/down-arrow.svg"
            alt="down-arrow"
          />
        </div>
      </section>
    </>
  );
}

export default body;
