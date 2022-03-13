// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Search } from "./genrecodes";
import NavBar from "./navbar";

function MainPage() {
    // const { getparams } = useParams();

    // useEffect(() => {
    //     document.title = `${getparams} - NetFlixCode`;
    // }, [getparams]);

    return (
        <>
            <NavBar />
            <div className="main">
                <div className="main_area">
                    <h1><span className="red">Net</span>flix Genre Codes</h1>
                    <Search />
                    <div className="how-to">
                        <h2>How To Use?</h2>
                        <div></div>
                        <p><strong>Findflixcodes </strong> is built to search & find Netflix genere codes or hidden category codes.</p>
                        <p>Here are the steps involved:</p>
                        <p><strong>Step #1:</strong> Enter the URL or link of the Facebook video that you wish to download.</p>
                        <p><strong>Step #2:</strong> Click on the submit button to start the conversion process.</p>
                        <p><strong>Step #3:</strong> Click on the submit button to start</p>
                        <p><strong>Step #4:</strong> Click on the conversion process.</p>
                    </div>

                </div>
            </div>
            <section className="content_area">
                <div className="main_area">
                    <p><span className="name">FindFlixCodes<span className="red">.com</span></span> is an online website which helps you to find netflix hidden genre codes. We had build our website in a efficient where users can search through netflix codes easily and find hidden genre codes hassle free, also users can navigate to that genre page using the Open on Netflix feature.</p>
                    <h2>How does it work?</h2>
                    <p>Once you've found the code for the category that you're searching, you just have to put the code in the search bar or you can replace the xx in this link https://netflix.com/browse/genre/xx</p>
                    <h2>How are Netflix's secret codes created?</h2>
                    <p>It is thanks to a mix of human and artificial intelligence that Netflix categorizes its series and movies.</p>
                    <p>In other words, Netflix has a lot of employees who are there to watch, evaluate and tag the platform's content to get metadata: the ending of the movies, the plot, the locations, the work of the main characters, to name a few.</p>
                    <h2>Do Netflix codes really work?</h2>
                    <p>Yes, all codes work. Sometimes a code associated with a category may not work because it is either not available in your area or Netflix has decided to change it. We try our best to make sure that all codes on Netflix-codes.com work. Please feel free to report a code that does not work for you.</p>
                    <h2>How to Use Netflix's Secret Codes?</h2>
                    <p>There you are on the page with all the movies and series associated to this category. Netflix may ask you to log in before showing you the movies and series associated to this category.</p>

                </div>
            </section>
            
            <div className="footer">
                <div className="name">FindFlixCodes<span className="red">.com</span></div>
                <div></div>
                <span>Made With <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg> In India</span>
                <p>© 2022 FindFlixCodes<span className="red">.com</span></p>
            </div>


        </>
    );
}

export default MainPage;
