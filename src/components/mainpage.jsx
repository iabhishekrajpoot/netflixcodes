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
                    <div>
                     <p>Findflixcodes.com is an online website which helps you to find netflix hidden genre codes. We had build our website in a efficient where users can search through netflix codes easily and find hidden genre codes hassle free, also users can navigate to that genre page using the Open on Netflix feature.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
