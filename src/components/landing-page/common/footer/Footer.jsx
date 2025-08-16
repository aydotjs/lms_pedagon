import React from "react";
import { blog } from "../../dummydata";
import "./footer.css";
import styles from "../../style.module.css"; // For CSS Module styles
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className={`newletter`}>
        <div className={`${styles.flexSB} ${styles.container} container flexSB lite`}>
          <div className={`${styles.left} ${styles.row} left row`}>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>
              Join our community of language enthusiasts and learners worldwide
            </span>
          </div>
          <div className={`${styles.row} ${styles.right}  right`}>
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className={`${styles.container} ${styles.padding} container padding litegrid`}>
          <div className="box logo">
            <h1>AMBESTEN ACADEMY</h1>
            <span>EXCELLENCE IN LANGUAGE EDUCATION</span>
            <p>
              Discover the joy of learning languages and connect with cultures
              around the world at Ambesten Academy.
            </p>

            <i className={`${styles.icon} fab fa-facebook-f icon`}></i>
            <i className={`${styles.icon} fab fa-twitter icon`}></i>
            <i className={`${styles.icon} fab fa-instagram icon`}></i>
          </div>
          <div className="box link">
            <h3 className="fs-medium">Explore</h3>
            <ul>
              <li className="fs-small">
                <Link style={{ color: "black" }} to="/about">
                  About
                </Link>
              </li>
              <li className="fs-small">Services</li>
              <li className="fs-small">
                <Link style={{ color: "black" }} to="/course">
                  Course
                </Link>
              </li>
              <li className="fs-small">Blog</li>
              <li className="fs-small">
                <Link style={{ color: "black" }} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="box link">
            <h3 className="fs-medium">Quick Links</h3>
            <ul>
              <Link style={{ color: "black" }} to="/terms_and_conditions">
                <li className="fs-small">Terms & Conditions</li>
              </Link>

              <Link style={{ color: "black" }} to="/payment_policy">
                <li className="fs-small">Payment Policy</li>
              </Link>

              <Link style={{ color: "black" }} to="/privacy">
                <li className="fs-small">Privacy</li>
              </Link>
              <Link style={{ color: "black" }} to="/cookies">
                <li className="fs-small">Cookies Policy</li>
              </Link>
              <Link style={{ color: "black" }} to="/refund">
                <li className="fs-small">Refund and Cancelation</li>
              </Link>
              <Link style={{ color: "black" }} to="/intellectual_property">
                <li className="fs-small">Intellectual Property Policy </li>
              </Link>
            </ul>
          </div>
          <div className="box">
            <h3 className="fs-medium">Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className={`${styles.flexSB} items flexSB`} key={val.id}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4 style={{fontSize : "1rem"}}>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3 className="fs-medium">Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>1 Oliver Street Mexborough
                Doncaster S64 9NW
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +447553544846
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                ambestenacademy@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 All rights reserved | Ambesten Academy</p>
      </div>
    </>
  );
};

export default Footer;
