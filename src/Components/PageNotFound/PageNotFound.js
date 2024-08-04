import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center mt-5">
          <div className="col-12 mt-5">
            <h4 className="text-danger">OPPS !! - 400 - ERROR </h4>
            <h5>Page not Found !</h5>
            <Link to={"/"} className="a">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
