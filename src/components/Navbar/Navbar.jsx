import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "../Drawer/Drawer";
import "./navbar.css";

function Navbar() {
	const [drawer, setDrawer] = useState(false);
    return (
		<>
        <div className="navbar bg-grey-dark">
            <div>
                <button className={`hamburger ${drawer && "active"}`} onClick={() => setDrawer(prev => !prev)}>
                    <span className="ham-line"></span>
                    <span className="ham-line"></span>
                    <span className="ham-line"></span>
                </button>
                <img
                    className="nav-logo-img mx-1"
                    alt="logo"
                    src="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/dice-logo_sbyevn.png"
                />
            </div>
            <span className="search">
                <input
                    type="text"
                    className="input-text input-text-nav input-search mx-1"
                    placeholder="Search"
                />
            </span>
            <Link
                to="/login"
                className="avatar-default-sm borderradius-full bg-primary color-black mx-1 text-none"
            >
                AT
            </Link>
        </div>
		<Drawer drawer={drawer} setDrawer={setDrawer} />
		</>
    );
}

export { Navbar };
