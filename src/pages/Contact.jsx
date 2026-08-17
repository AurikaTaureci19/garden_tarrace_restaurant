import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/contact.css";
import "../styles/contact_responsive.css";
import contactImg from "../assets/images/contact_A.jpg";
import Hero from "../components/Hero";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";


const Contact = () => {
    const { t } = useTranslation("contact");
    const mapRef = useRef(null);

    const loadGoogleMapsScript = (callback) => {
        if (window.google) {
            callback();
            return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=API_KEY`;
        script.async = true;
        script.defer = true;
        script.onload = callback;
        document.body.appendChild(script);
    };

    const initGoogleMap = () => {
        if (!window.google || !mapRef.current) return;

        const myLatlng = new window.google.maps.LatLng(34.063685, -118.272936);

        const mapOptions = {
            center: myLatlng,
            zoom: 14,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        // optional: resize handler
        window.google.maps.event.addDomListener(window, "resize", function () {
            setTimeout(() => {
                window.google.maps.event.trigger(map, "resize");
                map.setCenter(myLatlng);
            }, 500);
        });
    };

    useEffect(() => {
        // load script + init map
        loadGoogleMapsScript(initGoogleMap);

        // Header scroll logic
        const setHeader = () => {
            const header = document.querySelector(".header");
            const hamburgerBar = document.querySelector(".hamburger_bar");
            if (!header || !hamburgerBar) return;
            if (window.scrollY > 91) {
                header.classList.add("scrolled");
                hamburgerBar.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
                hamburgerBar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", setHeader);
        window.addEventListener("resize", setHeader);

        return () => {
            window.removeEventListener("scroll", setHeader);
            window.removeEventListener("resize", setHeader);
        };
    }, []);

    return (
        <>
            <Hero
                title={t("heroTitle")}
                image={contactImg}
                //dark
            />
            <div className="contact" style={{ padding: "1px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_title">{t("heading")}</div>
                            <div className="test_text">
                                <p>
                                    {t("intro")}
                                </p>
                            </div>
                            <div className="contact_logo_container">
                                <div className="contact_logo_title">The Garden Terrace</div>
                                <div className="contact_logo_subtitle">restaurant</div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6">
                            <div className="contact_list_container d-flex flex-column align-items-lg-center justify-content-start">
                                <div className="contact_list_content">
                                    <ul className="contact_list">
                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>{t("addressLabel")}</div>
                                            </div>
                                            <div>Kruiskouter 4, 1730 Asse, Bruxelles, Belgia</div>
                                        </li>

                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>{t("phoneLabel")}</div>
                                            </div>
                                            <div>+32 486 277 791</div>
                                        </li>

                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>{t("emailLabel")}</div>
                                            </div>
                                            <div>e.gardenterrace@gmail.com</div>
                                        </li>
                                    </ul>

                                    <div className="contact_social">
                                        <ul className="d-flex flex-row align-items-center justify-content-start">
                                            <li>
                                                {/*<a href="#">*/}
                                                {/*    <i className="fa fa-pinterest"></i>*/}
                                                {/*</a>*/}
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/profile.php?id=61573340181288">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            {/*<li>*/}
                                            {/*    <a href="#">*/}
                                            {/*        <i className="fa fa-twitter"></i>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <a href="#">*/}
                                            {/*        <i className="fa fa-dribbble"></i>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <a href="#">*/}
                                            {/*        <i className="fa fa-behance"></i>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <a href="#">*/}
                                            {/*        <i className="fa fa-linkedin"></i>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row google_map_row">
                        <div className="col">
                            <Map/>
                        </div>
                    </div>
            </div>
            </div>
            <ContactForm/>
            {/*<ReservationForm/>*/}
        </>
    );
};

export default Contact;