import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ dark }) => {
    const { t } = useTranslation(["common", "header"]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector(".header");
            if (!header) return;

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={`header ${dark ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="header_content d-flex flex-row align-items-center justify-content-start">

                                {/* LOGO */}
                                <div className="logo">
                                    <Link to="/">
                                        <div>The Garden Terrace</div>
                                        <div>restaurant</div>
                                    </Link>
                                </div>

                                {/* NAVIGATION (desktop) */}
                                <nav className="main_nav">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li><Link to="/">{t("common:nav.home")}</Link></li>
                                        <li><Link to="/about">{t("common:nav.about")}</Link></li>
                                        <li><Link to="/menu">{t("common:nav.menu")}</Link></li>
                                        <li><Link to="/blog">{t("common:nav.blog")}</Link></li>
                                        <li><Link to="/contact">{t("common:nav.contact")}</Link></li>
                                    </ul>
                                </nav>

                                {/* PHONE */}
                                <div className="reservations_phone ml-auto">
                                    {t("header:reservationsLabel")} +32 486 277 791
                                </div>

                                {/* LANGUAGE SWITCHER */}
                                <LanguageSwitcher />

                                {/* 🔥 HAMBURGER (mobil) */}
                                <div className="hamburger ml-auto" onClick={toggleMenu}>
                                    <div className={`menu_hamburger ${menuOpen ? "active" : ""}`}>
                                        <div className="line_1 hamburger_lines"></div>
                                        <div className="line_2 hamburger_lines"></div>
                                        <div className="line_3 hamburger_lines"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 🔥 MOBILE MENU */}
            {/*<MobileMenu isOpen={menuOpen} />*/}
            <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </>
    );
};

export default Header;