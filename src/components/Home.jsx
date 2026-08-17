import React from "react";
import homeImg from "../assets/images/restaurant.jpeg";
import SignatureDish from "./SignatureDish";


export default function Home() {
    return (
        <div className="super_container">
            <div className="home">
                {/*<div*/}
                {/*    className="parallax_background"*/}
                {/*    style={{*/}
                {/*        backgroundImage: `url(${homeImg})`,*/}
                {/*        backgroundSize: "cover",*/}
                {/*        backgroundPosition: "center",*/}
                {/*        height: "90vh",*/}
                {/*    }}*/}
                {/*>*/}


                {/*</div>*/}

                    <div className="parallax_background parallax-window" data-parallax="scroll"
                         style={{
                             backgroundImage: `url(${homeImg})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }} data-speed="0.8"></div>
                    {/*<div className="home_container">*/}
                    {/*    <div className="container">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col">*/}
                    {/*                <div className="home_content text-center">*/}
                    {/*                    <div className="home_subtitle page_subtitle">The Venue is</div>*/}
                    {/*                    <div className="home_title"><h1>An Extraordinery Experience</h1></div>*/}
                    {/*                    <div className="home_text ml-auto mr-auto">*/}
                    {/*                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada*/}
                    {/*                            lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula*/}
                    {/*                            sapien. Suspendisse cursus faucibus finibus.</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                {/*<div className="home_container text-center">*/}
                {/*    <div className="home_subtitle page_subtitle">The Venue is</div>*/}
                {/*    <h1 className="home_title">An Extraordinary Experience</h1>*/}
                {/*</div>*/}


            </div>
            <SignatureDish/>
        </div>
    );

}