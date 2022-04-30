import React, { useEffect } from "react";
import Footer from "./Footer";
import { Search } from "./genrecodes";
import NavBar from "./navbar";

function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `FindFlixCodes.com - Search & Find Netflix Hidden Genre Codes`;
    }, []);

    return (
        <>
            <NavBar />
            <div className="main">
                <div className="main_area">
                    <h1><span className="red">Net</span>flix Genre Codes</h1>
                    <Search />
                    <div className="how-to" id="how-to">
                        <h2>How To Use?</h2>
                        <div></div>
                        <p><strong>Findflixcodes </strong> is built to search & find Netflix genere codes or hidden category codes.</p>
                        <p>Here are the steps involved:</p>
                        <p><strong>Step #1:</strong> Type Genre or category Name in Search Bar.</p>
                        <p><strong>Step #2:</strong> Result list will be refreshed in real-time.</p>
                        <p><strong>Step #3:</strong> Click on the Genre or Category Code to Navigate to Netflix page.</p>
                        <p><strong>Step #4:</strong> Hit Open-on-Netflix Link. </p>
                    </div>

                </div>
            </div>
            <section className="content_area">
                <div className="main_area">
                    <p><span className="name">FindFlixCodes<span className="red">.com</span></span> is an online website which helps you to find netflix hidden genre codes. We had build our website in a modern way so that users can search through netflix codes easily and find hidden genre or category codes hassle free, also users can navigate to that genre page using the Open-on-Netflix feature.</p>
                    <strong>features:</strong>
                    <ul>
                        <li>Fast and Free.</li>
                        <li>Easy to use.</li>
                        <li>100% Ads Free.</li>
                        <li>Search among 3000+ hidden Genre codes.</li>
                        <li>Compactible with Android, tablet, Pc or IOS devices.</li>

                    </ul>
                    <h2>How does FindFlixCodes work?</h2>
                    <p>Once you've found the code for the category that you're searching, you just have to click on the code it will navigate you to a page where you can find Link to open-on-Netflix, it will directly open that genre or category page on netflix.</p>
                    <h2>How findflixcodes.com get Netflix's secret codes list?</h2>
                    <p>Well! it is just a piece of coding thing, As user enters a keyword on website to find the particular genre code the website's backend code match that keyword in our netflix genre codes list database and shows the desired result on front-end.</p>
                    <h2>Do Netflix codes really work?</h2>
                    <p>Absolutely all the genre codes that you will find on findflixcodes works fine. Sometimes while opening page link on netflix,  netflix may ask you to login first or maybe the genre page your looking for isn't available in your country.</p>
                   

                </div>
            </section>

            <Footer />

        </>
    );
}

export default MainPage;
