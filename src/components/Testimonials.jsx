import React from "react";
import { useTranslation } from "react-i18next";
import testimonialsBg from "../assets/images/testimonials.jpg";
import quoteImg from "../assets/images/quote.png";


const Testimonials = () => {
  const { t } = useTranslation("testimonials");

  return (
    <div className="testimonials">
      <div
        className="parallax_background"
        style={{
          backgroundImage: `url(${testimonialsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title_container">
              <div className="page_subtitle_intro">{t("eyebrow")}</div>
              <div className="section_title">
                <h2>{t("heading")}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row testimonials_row">
          <div className="col-lg-10 offset-lg-1">
            <div className="test_slider_container">
              <div className="text-center">
                <div className="quote ml-auto mr-auto">
                  <img src={quoteImg} alt="quote" />
                </div>

                <div className="test_text">
                  <p>
                    "{t("quote")}"
                  </p>
                </div>

                <div className="test_info">
                  {t("authorName")}, <span>{t("authorNote")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
