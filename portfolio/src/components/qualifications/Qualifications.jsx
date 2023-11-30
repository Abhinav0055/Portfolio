import React, { useState } from "react";
import "./qualifications.css";

function Qualifications() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="fa-solid fa-graduation-cap"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="fa-solid fa-briefcase"></i> Project
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BE CSE</h3>
                                <span className="qualification__subtitle">
                                    Chitkara University
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">
                                    Government Model
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    2019-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Primary School</h3>
                                <span className="qualification__subtitle">
                                    St Xavier's High School
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    Till 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Electronics Website</h3>
                                <span className="qualification__subtitle">
                                    HTML,CSS and JavaScript
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Quiz App</h3>
                                <span className="qualification__subtitle">
                                   Flutter
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Zomato Clone</h3>
                                <span className="qualification__subtitle">
                                    React
                                </span>
                                <div className="qualification__calender">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
