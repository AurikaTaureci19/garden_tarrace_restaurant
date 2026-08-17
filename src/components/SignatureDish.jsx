import React from "react";
import { useTranslation } from "react-i18next";
import signatureDish from "../assets/images/poza_dish1.jpeg";
import "../styles/signature.css";

const SignatureDish = () => {
    const { t } = useTranslation("home");
    return (
        <div className="sig">

            {/* CONTENT */}
            <div className="sig_content_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">

                            <div className="sig_content">
                                {/*<div className="sig_subtitle page_subtitle">*/}
                                {/*    Ceva nou*/}
                                {/*</div>*/}

                                {/*<div className="sig_title">*/}
                                {/*    <h1>Preparatul nostru special</h1>*/}
                                {/*</div>*/}
                                <div className="intro_subtitle page_subtitle_intro">
                                   {t("signatureDish.subtitle")}
                                </div>

                                <div className="rating_r sig_rating rating_r_5">
                                    <i></i><i></i><i></i><i></i><i></i>
                                </div>

                                {/*<div className="sig_name_container d-flex flex-row align-items-start justify-content-start">*/}
                                  <div className="sig_content_list">
                                <div>
                                        {t("signatureDish.paragraph")}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className="sig_image_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-5">

                            <div className="sig_image">

                                {/* 🔥 FUNDAL IMPORTANT */}
                                <div
                                    className="background_image"
                                    style={{ backgroundImage: `url(${signatureDish})` }}
                                ></div>

                                {/* fallback (ascuns din CSS) */}
                                <img src={signatureDish} alt="Signature Dish" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignatureDish;