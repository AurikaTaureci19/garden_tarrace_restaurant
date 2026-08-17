import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu = ({ isOpen, closeMenu }) => {
    const { t } = useTranslation(["common", "header"]);
    return (
        <div className={`menu ${isOpen ? "active" : ""}`}>
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                <ul>
                    <li><Link to="/" onClick={closeMenu}>{t("common:nav.home")}</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>{t("common:nav.about")}</Link></li>
                    <li><Link to="/menu" onClick={closeMenu}>{t("common:nav.menu")}</Link></li>
                    <li><Link to="/blog" onClick={closeMenu}>{t("common:nav.blog")}</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>{t("common:nav.contact")}</Link></li>
                </ul>
                <LanguageSwitcher />
            </div>

            <div className="menu_reservations_phone">
                {t("header:reservationsLabel")} +40 123 456 789
            </div>
        </div>
    );
};

export default MobileMenu;
