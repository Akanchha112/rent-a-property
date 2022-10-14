import React from "react";
import "./Nav.css";
const Nav = () => {
    return<>
        <div className="nav_container">
            <div className="nav-logo">
                <img src="images/estatery_0.png"  width={"90px"} />
            </div>
            <div className="navigation_pages">
                Rent
            </div>
            <div className="login_btn">
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>
        </div>
    </>
}

export default Nav;