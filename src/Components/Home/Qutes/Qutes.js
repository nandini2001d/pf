import React from "react";
import { Carousel } from "react-bootstrap";
import "../Qutes/Qutes.css";

export default function Qutes() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 text-center">
          <div className="col-sm-6 offset-sm-3 col-12 mb-3">
            <Carousel>
              <Carousel.Item interval={6000} style={{ height: "185px" }}>
                <p>
                  Bad programmers worry about the code. Good programmers worry
                  about data structures and their relationships.
                </p>
                <h5>Linus Torvalds</h5>
              </Carousel.Item>
              <Carousel.Item interval={6000} style={{ height: "185px" }}>
                <p>
                  Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.
                </p>
                <h5>Martin Fowler</h5>
              </Carousel.Item>
              <Carousel.Item interval={6000} style={{ height: "185px" }}>
                <p>
                  As a programmer, it is your job to put yourself out of
                  business. What you do today can be automated tomorrow.
                </p>
                <h5>Doug McIlroy</h5>
              </Carousel.Item>
              <Carousel.Item interval={6000} style={{ height: "185px" }}>
                <p>
                  It is far, far easier to make a correct program fast than to
                  make a fast program correct.{" "}
                </p>
                <h5>Herb Sutter</h5>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
