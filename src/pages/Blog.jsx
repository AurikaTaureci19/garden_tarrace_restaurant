// src/pages/Blog.jsx
import React from "react";
import { useTranslation } from "react-i18next";

// Import CSS (adaptează căile dacă ai pus fișierele în assets/styles)
import "../styles/blog.css";
import "../styles/blog_responsive.css";

// Import imagini
import blogImg from "../assets/images/blog.jpg";
import blog1 from "../assets/images/blog_1.jpg";
import blog2 from "../assets/images/blog_2.jpg";
import blog3 from "../assets/images/blog_3.jpg";
import blog4 from "../assets/images/blog_4.jpg";
import blog5 from "../assets/images/blog_5.jpg";
import blog6 from "../assets/images/blog_6.jpg";
import reservationsImg from "../assets/images/reservations.jpg";

const blogPosts = [
    { img: blog1 },
    { img: blog2 },
    { img: blog3 },
    { img: blog4 },
    { img: blog5 },
    { img: blog6 },
];

export default function Blog() {
    const { t } = useTranslation("blog");
    const personOptions = t("reservations.personOptions", { returnObjects: true });

    return (
        <div className="super_container">
            {/* Header */}
            {/*<Header />*/}

            {/* Home / Hero */}
            <div className="home" style={{ backgroundImage: `url(${blogImg})` }}>
                <div className="home_container text-center text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content">
                                    {/*<div className="home_subtitle page_subtitle">The Venue</div>*/}
                                    <div className="home_title"><h1>{t("heading")}</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="blog">
                <div className="container">
                    <div className="row">
                        {blogPosts.map((post, index) => (
                            <div className="col-lg-6 blog_col" key={index}>
                                <div className="blog_post">
                                    <div className="blog_post_image_container">
                                        <div className="blog_post_image">
                                            <img src={post.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="blog_post_content">
                                        <div className="blog_post_info">
                                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                            </ul>
                                        </div>
                                        <div className="blog_post_text">
                                            <p>{t(`posts.${index}`)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row load_more_row">
                        <div className="col text-center">
                            <div className="button load_more_button ml-auto mr-auto trans_200">
                                {/*<a href="#">Load More</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reservations Section */}
            <div className="reservations text-center" style={{ backgroundImage: `url(${reservationsImg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="reservations_content d-flex flex-column align-items-center justify-content-center">
                                <div className="res_stars page_subtitle">{t("reservations.stars")}</div>
                                <div className="res_title">{t("reservations.heading")}</div>
                                <div className="res_form_container">
                                    <form className="res_form">
                                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                            <input type="text" id="datepicker" className="res_input" required />
                                            <input type="text" className="res_input timepicker" required />
                                            <select className="res_select">
                                                {personOptions.map((option, i) => (
                                                    <option key={option} disabled={i === 0} selected={i === 0}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button className="res_button">{t("reservations.submitButton")}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}