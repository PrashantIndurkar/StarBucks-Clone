import React from "react";
import "./SignInButton.css";
import { Link } from "react-router-dom";

export default function SignInButton() {
	return (
		<Link className="signInButton" to="/account/signin">
			Sign In
		</Link>
	);
}
