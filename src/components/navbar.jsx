import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    return (<>
        <section>
            <div className="header">
                <Link to="/">
                    <div className="logo">FindFlixCodes<span className="red">.com</span></div>
                </Link>
                <HashLink smooth to="#how-to">
                    <div className="c_head">How To Use? </div>
                </HashLink>

            </div>
        </section>

    </>)
};

export default NavBar;
