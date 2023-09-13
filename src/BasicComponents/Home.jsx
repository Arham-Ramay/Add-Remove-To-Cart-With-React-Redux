import React from "react";

function Home(props) {
  // console.log("home",props.data)
  console.warn(props);
  return (
    <>
      <div>Home</div>
      <div className="card" style={{ width: "16rem" }}>
        <img
          src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">I-Phone 15</h5>
          <p className="card-text">Price : 1000$</p>
          <button
            onClick={() =>
              props.addToCartHandler({ price: "1000", name: "i phone 14" })
            }
            href="#"
            className="btn btn-primary w-100"
          >
            Add To Cart
          </button>
          <button
            onClick={() => props.removeToCartHandler()}
            href="#"
            className="btn btn-primary w-100 mt-2"
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
