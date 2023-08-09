import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (

		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/52/Star_Wars_-_The_Force_Awakens_logo.png"
					width="90"
				/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length <= 0 ?
							<li>Empty</li> :
							<>
								{store.favorites.map((item) => {
									return (
										<li><a className="dropdown-item" href="#">{item.name}</a>
											<button className="btn btn-sm btn-danger"
												onClick={() => actions.removeFromFavorites(item)}>Remove</button>
										</li>
									)
								})}
							</>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
