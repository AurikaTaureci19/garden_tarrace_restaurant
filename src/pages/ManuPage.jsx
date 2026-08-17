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

import MeniuRestaurant from "../components/MeniuRestaurant";

const MenuPage = () => {
return(
      <div>
      <MeniuRestaurant />
    </div>
);
};

export default MenuPage;
