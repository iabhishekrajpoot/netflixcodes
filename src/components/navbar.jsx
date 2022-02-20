import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function NavBar() {
    return(<>
<header>
    <div className="header"><Link to="/">Netflix Codes</Link></div>
</header>
    </>)
};

export default NavBar;