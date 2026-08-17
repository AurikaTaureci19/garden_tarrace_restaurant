import React from "react";
import LobsterBisque from "../assets/img/menu/lobster-bisque.jpg";
import BreadBarrel from "../assets/img/menu/bread-barrel.jpg";

const menuItems = [
    {
        id: 1,
        category: "starters",
        title: "Lobster Bisque",
        price: "$5.95",
        image: "assets/img/menu/lobster-bisque.jpg",
        ingredients: "Lorem, deren, trataro, filede, nerada",
    },
    {
        id: 2,
        category: "specialty",
        title: "Bread Barrel",
        price: "$6.95",
        image: "assets/img/menu/bread-barrel.jpg",
        ingredients: "Lorem, deren, trataro, filede, nerada",
    },
    {
        id: 3,
        category: "starters",
        title: "Crab Cake",
        price: "$7.95",
        image: "assets/img/menu/cake.jpg",
        ingredients:
            "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
    },
    {
        id: 4,
        category: "salads",
        title: "Caesar Selections",
        price: "$8.95",
        image: "assets/img/menu/caesar.jpg",
        ingredients: "Lorem, deren, trataro, filede, nerada",
    },
    {
        id: 5,
        category: "specialty",
        title: "Tuscan Grilled",
        price: "$9.95",
        image: "assets/img/menu/tuscan-grilled.jpg",
        ingredients:
            "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
    },
    {
        id: 6,
        category: "starters",
        title: "Mozzarella Stick",
        price: "$4.95",
        image: "assets/img/menu/mozzarella.jpg",
        ingredients: "Lorem, deren, trataro, filede, nerada",
    },
    {
        id: 7,
        category: "salads",
        title: "Greek Salad",
        price: "$9.95",
        image: "assets/img/menu/greek-salad.jpg",
        ingredients:
            "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
    },
    {
        id: 8,
        category: "salads",
        title: "Spinach Salad",
        price: "$9.95",
        image: "assets/img/menu/spinach-salad.jpg",
        ingredients:
            "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    },
    {
        id: 9,
        category: "specialty",
        title: "Lobster Roll",
        price: "$12.95",
        image: "assets/img/menu/lobster-roll.jpg",
        ingredients:
            "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
    },
];
const Test = () => {
    return (
        <div style={{ background: "red", color: "white" }}>
            TEST COMPONENT



            <section id="menu" className="menu section">
                <div className="container section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 menu-item">
                            <img
                                src={LobsterBisque}
                                className="menu-img"
                                alt="Lobster Bisque"
                            />

                            <div className="menu-content">
                                <a href="/">Lobster Bisque</a>
                                <span>$5.95</span>
                            </div>

                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item">
                            <img
                                src={BreadBarrel}
                                className="menu-img"
                                alt="Bread Barrel"
                            />

                            <div className="menu-content">
                                <a href="/">Bread Barrel</a>
                                <span>$6.95</span>
                            </div>

                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Test;