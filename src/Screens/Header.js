import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<Link to="/" className="header__logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
						alt=""
					/>
				</Link>
				<Link to="/menu" className="header__link">
					Menu
				</Link>
				<Link to="/menu" className="header__link">
					Rewords
				</Link>
				<Link to="/menu" className="header__link">
					Gift Cards
				</Link>
			</div>
			<div className="header__right"></div>
		</div>
	);
}

export default Header;
