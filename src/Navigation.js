import * as React from "react";
import { motion } from "framer-motion";
import FindAStore from "./FindAStore";
import MenuLink from "./MenuLink";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import SignInButton from "../src/SignInButton";
import SignUpButton from "../src/SignUpButton";
import LogoutButton from "../src/LogoutButton";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const variants2 = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Navigation = ({ toggle }) => {
	const user = useSelector(selectUser);
	const [showMenuCategories, setShowMenuCategories] = React.useState(false);

	return (
		<>
			{showMenuCategories ? (
				<motion.ul variants={variants}>
					<MenuLink
						link="Menu"
						goBackIcon
						onClick={() => {
							setShowMenuCategories(false);
						}}
						width="60%"
					/>
					<MenuLink
						link="All products"
						path="/menu"
						onClick={() => {
							setShowMenuCategories(false);
							toggle();
						}}
					/>
					<MenuLink
						link="Featured"
						path="/menu/featured"
						onClick={() => {
							setShowMenuCategories(false);
							toggle();
						}}
					/>
					<MenuLink
						link="Previous Orders"
						onClick={() => {
							setShowMenuCategories(false);
							toggle();
						}}
					/>
					<MenuLink
						link="Favorite Products"
						onClick={() => {
							setShowMenuCategories(false);
							toggle();
						}}
					/>
				</motion.ul>
			) : (
				<motion.ul variants={variants}>
					<MenuLink
						link="Menu"
						icon
						onClick={() => setShowMenuCategories(true)}
					/>
					<MenuLink link="Rewards" />
					<MenuLink link="Gift Cards" />
					<motion.hr variants={variants2} />
					<motion.div className="navigation__buttons" variants={variants2}>
						{!user ? (
							<>
								<SignInButton />
								<SignUpButton />
							</>
						) : (
							<LogoutButton />
						)}
					</motion.div>
					<motion.div variants={variants2}>
						<FindAStore />
					</motion.div>
				</motion.ul>
			)}
		</>
	);
};
