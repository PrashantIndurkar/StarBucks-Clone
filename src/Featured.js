import React from "react";
import { Link } from "react-router-dom";
import "./Featured.css";
function Featured({
	title,
	info,
	link,
	path,
	image,
	order,
	background,
	color,
	className,
}) {
	return (
		<div className="featured" style={{ background }}>
			<div className="featured__left" style={{ order, color }}>
				<h1>{title}</h1>
				<h4>{info}</h4>
				<Link className={className}>{link}</Link>
			</div>
			<div className="featured__right">
				<img src={image} alt="{title}" />
			</div>
		</div>
	);
}

export default Featured;