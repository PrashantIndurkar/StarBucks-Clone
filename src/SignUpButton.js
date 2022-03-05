import React from "react";
import { Link } from "react-router-dom";
import "./SignUpButton.css";

export default function SignUpButton() {
	return (
		<Link className="signUpButton" to="/account/create">
			Join Now
		</Link>
	);
}
