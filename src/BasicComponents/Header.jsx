import React from "react";

function Header(props) {
  console.log("home", props.data);
  return (
    <>
      <div className="">
        <i
          style={{ position: "absolute", right: "5%", top: "1%" }}
          className="bi bi-cart-plus fs-2"
        >
          <h6>
            <span
              className="badge bg-danger rounded-5"
              style={{ position: "absolute", right: "0%", top: "0%" }}
            >
              {props.data.length}
            </span>
          </h6>
        </i>
      </div>
    </>
  );
}

export default Header;
