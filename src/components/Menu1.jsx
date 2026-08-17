// src/pages/MenuPage.jsx
import React from "react";

// CSS
import "../styles/bootstrap-4.1.2/bootstrap.min.css";
import "../styles/menu.css";
import "../styles/menu_responsive.css";

// Plugins
import "../plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../plugins/OwlCarousel2-2.2.1/animate.css";
import "../plugins/jquery-datepicker/jquery-ui.css";
import "../plugins/jquery-timepicker/jquery.timepicker.css";

// Images
import MenuImage from "../assets/images/menu.jpg";

const MenuPage = () => {

    // const dishes = {
    //     starters: [
    //         { title: "Pork Tenderloin in Green Pepper", price: "$20" },
    //         { title: "Shrimp with Garlic", price: "$17" },
    //         { title: "Wild Mushroom with Chicken", price: "$20" },
    //         { title: "Oysters with Baked Potatoes", price: "$20" },
    //         { title: "Roast Pork", price: "$17" },
    //     ],
    //     main: [
    //         { title: "Chicken with Lemon", price: "$20" },
    //         { title: "Shrimp with Garlic", price: "$17" },
    //         { title: "Wild Mushroom with Chicken", price: "$20" },
    //         { title: "Oysters with Baked Potatoes", price: "$20" },
    //         { title: "Roast Pork", price: "$17" },
    //     ],
    //     deserts: [
    //         { title: "Lava Cake", price: "$20" },
    //         { title: "Orange Tart", price: "$17" },
    //         { title: "Cheese Cake", price: "$20" },
    //         { title: "Chocolate Mousse", price: "$17" },
    //         { title: "Ice Cream", price: "$17" },
    //     ]
    // };
    //
    // const renderDish = (dish) => (
    //     <div className="dish" key={dish.title}>
    //         <div className="dish_title_container d-flex flex-row justify-content-between">
    //             <div className="dish_title">{dish.title}</div>
    //             <div className="dish_price">{dish.price}</div>
    //         </div>
    //         <div className="dish_order">
    //             <a href="#">Order Now</a>
    //         </div>
    //     </div>
    // );

    return (
        <div className="super_container">

            {/* HERO */}
            <div className="home">
                <div
                    className="parallax_background"
                    style={{ backgroundImage: `url(${MenuImage})` }}
                ></div>

                <div className="home_container">
                    <div className="container">
                        <div className="home_content text-center">
                            {/*<div className="home_subtitle"> The Garden Terras</div>*/}
                            <div className="home_title">
                                <h1>The Menu</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* MENU */}
            {/*<div className="themenu">*/}
            {/*    <div className="container">*/}

            {/*        <div className="section_title_container text-center">*/}
            {/*            <div className="section_subtitle">Something new</div>*/}
            {/*            <div className="section_title">*/}
            {/*                <h1>Discover Our Menu</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="row themenu_row">*/}

            {/*            /!* STARTERS *!/*/}
            {/*            <div className="col-lg-4 themenu_column">*/}
            {/*                <div className="themenu_image">*/}
            {/*                    <img src={StartersImage} alt="" />*/}
            {/*                </div>*/}

            {/*                <div className="themenu_col">*/}
            {/*                    <div className="themenu_col_title">Starters</div>*/}
            {/*                    /!*<div className="dish_list">*!/*/}
            {/*                    /!*    {dishes.starters.map(renderDish)}*!/*/}
            {/*                    /!*</div>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* MAIN *!/*/}
            {/*            <div className="col-lg-4 themenu_column">*/}
            {/*                <div className="themenu_image">*/}
            {/*                    <img src={MainImage} alt="" />*/}
            {/*                </div>*/}

            {/*                <div className="themenu_col">*/}
            {/*                    <div className="themenu_col_title">Main</div>*/}
            {/*                    /!*<div className="dish_list">*!/*/}
            {/*                    /!*    {dishes.main.map(renderDish)}*!/*/}
            {/*                    /!*</div>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* DESERTS *!/*/}
            {/*            <div className="col-lg-4 themenu_column">*/}
            {/*                <div className="themenu_image">*/}
            {/*                    <img src={DesertsImage} alt="" />*/}
            {/*                </div>*/}

            {/*                <div className="themenu_col">*/}
            {/*                    <div className="themenu_col_title">Deserts</div>*/}
            {/*                    /!*<div className="dish_list">*!/*/}
            {/*                    /!*    {dishes.deserts.map(renderDish)}*!/*/}
            {/*                    /!*</div>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* SIGNATURE */}
            {/*<div className="sig">*/}
            {/*    <div className="container">*/}

            {/*        <div className="section_title_container">*/}
            {/*            <div className="section_subtitle">Something new</div>*/}
            {/*            <div className="section_title">*/}
            {/*                <h1>Our Signature Dishes</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="row">*/}

            {/*            {[Sig1Image, Sig2Image, Sig3Image].map((img, i) => (*/}
            {/*                <div className="col-lg-4" key={i}>*/}
            {/*                    <div className="sig_image">*/}
            {/*                        <img src={img} alt="" />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}

            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}


        </div>

    );

};

export default MenuPage;