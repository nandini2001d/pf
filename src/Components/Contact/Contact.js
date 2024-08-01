import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getDatabase, push, ref, set } from "firebase/database";
import app from "../../firebase/firebase";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [help, setHelp] = useState("");

  const contactData = async (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    const newRef = push(ref(db, "pf/contact"));
    set(newRef, {
      name: name,
      email: email,
      mobile: mobile,
      help: help,
    })
      .then(() => {
        toast.success(
          "Your message send successfully. I will contact you sortly, Thank You!!"
        );
        setName("");
        setEmail("");
        setMobile("");
        setHelp("");
      })
      .catch((errer) => {
        toast.error("errer");
      });
  };

  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <section
        style={{ backgroundColor: "rgb(248, 245, 245)", paddingBottom: "50px" }}
      >
        <div className="container mt-5 text-center">
          <div className="row mt-5">
            <h5 className="mt-5 mb-5 text-center">YOU CAN REACH ME HERE : </h5>
            <div className="col-sm-4 mt-4">
              <h6>Nagpur,India</h6>
              <p>
                Plot 863/5 , Bharatwada <br />
                Pardi HB-Town - 440035 <br />
                <BiPhone /> 801 064 9831
              </p>

              <AnimatedOnScroll animationIn="bounceInLeft">
                <Link
                  to="https://maps.app.goo.gl/qWdJLWCyzTp7hJaP7"
                  className="a"
                >
                  VIEW ON GOOGLE MAP <FaExternalLinkAlt />
                </Link>
              </AnimatedOnScroll>
            </div>
            <div className="col-sm-4 mt-4">
              <h6>Lonara, India</h6>
              <p>
                JIT, Village Lonara,
                <br />
                Nagpur - 441111 <br />
                <BiPhone /> 0712 266 8234
              </p>

              <AnimatedOnScroll animationIn="bounceInLeft">
                <Link
                  to="https://www.google.com/maps/place/Jhulelal+Institute+of+Technology/@21.247697,79.0476733,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4ede6d9555555:0x602c02563c3d0c17!8m2!3d21.247697!4d79.0502482!16s%2Fm%2F0q3_m0q?hl=en-AU&entry=ttu"
                  className="a"
                >
                  VIEW ON GOOGLE MAP <FaExternalLinkAlt />
                </Link>
              </AnimatedOnScroll>
            </div>
            <div className="col-sm-4 mt-4">
              <h6>Bhandara, India</h6>
              <p>
                At.Tirri, Ta.Pauni
                <br />
                Dis. Bhandara - 441910 <br />
                <BiPhone /> 838 084 8467
              </p>

              <AnimatedOnScroll animationIn="bounceInLeft">
                <Link
                  to="https://maps.app.goo.gl/UZHaRT2xMeHyYjdb8"
                  className="a"
                >
                  VIEW ON GOOGLE MAP <FaExternalLinkAlt />
                </Link>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          <h4 className="mb-5 mt-3">Let's get in touch</h4>
          <div className="col-12">
            <form onSubmit={contactData}>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your name"
                  required
                  style={{ border: "1px solid black" }}
                  value={name}
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Your email address"
                  required
                  style={{ border: "1px solid black" }}
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="mb-4">
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Mobile no."
                  required
                  style={{ border: "1px solid black" }}
                  value={mobile}
                  name="mobile"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>

              <div class="mb-4">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  required
                  placeholder="How can I help ?"
                  style={{ border: "1px solid black", resize: "none" }}
                  value={help}
                  name="help"
                  onChange={(e) => {
                    setHelp(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="mb-4">
                <button type="submit" className="btn btn-dark">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.8241446505363!2d79.14974457526017!3d21.159395580522897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA5JzMzLjgiTiA3OcKwMDknMDguNCJF!5e0!3m2!1sen!2sin!4v1722535614721!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
