import React from "react";
import "./about.css";
import ME from "../../assets/myImages/f161f2f803c5d37beb766c878b5ecc8c.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";

const About = () => {
    return (
        <section id="about">
            <h2 style={{ color: "white" }}>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me pic" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>7+ Years On-Site/Remote Experience</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Services</h5>
                            <small>Detailed in services section</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small>Please see portfolio</small>
                        </article>
                    </div>

                    <p style={{ fontSize: "2rem" }}>
                        {" "}
                        Hello, I'm Micheal, a full stack developer living and
                        working in Toledo,OH. Plain and simple, I love design
                        and programming. I'm passionate about creating clean,
                        unique, elegant websites. The websites that you will
                        love. Designs that work.
                    </p>

                    <p style={{ fontSize: "2rem" }}>
                        How a website is built has an impact n it usability,
                        functionality and effaccy. As internet usage increases
                        year by year, it is essential that business websites are
                        not only visually appealing but are also functional and
                        user-friendly. Beautifully designed and executed
                        websites are useless to businesses if they aren't
                        developed properly; a website needs to be built to last.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
