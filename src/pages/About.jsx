import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/about.css";
import "../styles/about_responsive.css";
import aboutBg from "../assets/images/about.jpg";
import Testimonials from "../components/Testimonials";
import Intro from "../components/Intro";
import MeniuRestaurant from "../components/MeniuRestaurant";

function About() {
  const { t } = useTranslation("about");
  return (
    <div className="super_container">
      <div className="home">
        <div
          className="home_container"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: "cover",
            padding: "180px 0",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col text-center">
                {/*<div className="page_subtitle_intro">*/}
                {/*    About us*/}
                {/*</div>*/}
                {/*<div className="home_title">*/}
                {/*    <h1>About us</h1>*/}
                {/*</div>*/}
                <div className="home_title page_subtitle_intro">
                  <h1>{t("heading")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <Testimonials />
    </div>
  );
}

export default About;
