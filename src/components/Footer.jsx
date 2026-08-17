import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    {/* Footer Logo */}
                    <div className="col-lg-3 footer_col">
                        <div className="footer_logo">
                            <div className="footer_logo_title">The Garden Terrace</div>
                            <div className="footer_logo_subtitle">restaurant</div>
                        </div>

                        <div className="copyright">
                            <p style={{ lineHeight: "1.2" }}>
                                {t("copyright", { year })}
                                <i className="fa fa-heart-o"></i> {" "}
                            </p>
                        </div>
                    </div>

                    {/* Footer About */}
                    <div className="col-lg-6 footer_col">
                        <div className="footer_about">
                            <p>
                                {t("aboutParagraph")}
                            </p>
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="col-lg-3 footer_col">
                        <div className="footer_contact">
                            <ul className="list-unstyled">

                                <li className="d-flex flex-row align-items-start">
                                    <div className="footer_contact_title">{t("addressLabel")}</div>
                                    <div className="footer_contact_text ms-2">
                                        Kruiskouter 4, 1730 Asse, Belgia
                                    </div>
                                </li>

                                <li className="d-flex flex-row align-items-start mt-2">
                                    <div className="footer_contact_title">{t("phoneLabel")}</div>
                                    <div className="footer_contact_text ms-2">
                                        +32 486 277 791
                                    </div>
                                </li>

                                <li className="d-flex flex-row align-items-start mt-2">
                                    <div className="footer_contact_title">{t("emailLabel")}</div>
                                    <div className="footer_contact_text ms-2">
                                        e.gardenterrace@gmail.com
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;