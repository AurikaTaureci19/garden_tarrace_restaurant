import React from "react";
import { useTranslation } from "react-i18next";
import aboutIntro from "../assets/images/restaurant_cafe.jpeg";
import "../styles/about_responsive.css";

const Intro = () => {
    const { t } = useTranslation("home");
    return (
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="intro_content">
                                <div className="intro_subtitle page_subtitle_intro">
                                    {t("intro.subtitle")}
                                </div>
                                <div className="intro_text">
                                    <p>
                                        {t("intro.paragraph")}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="intro_image">
                                        <img src={aboutIntro} alt="About Intro"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            );
            };

            export default Intro;