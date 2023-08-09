import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css"; // Asegúrate de importar tu archivo de estilos CSS

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const planet = store.planets[params.theid];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{planet.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero non dui aliquet ullamcorper. Duis sit amet nulla a quam eleifend vulputate. Ut lacinia elit ac odio placerat fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vitae leo nec odio vehicula tincidunt. In hac habitasse platea dictumst. Sed egestas elit a urn
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className="red-line"></div>
                    <div className="properties-container">
                    <div className="property">
                            <span>name:</span> {planet.name}
                        </div>
                        <div className="property">
                            <span>climate:</span> {planet.climate}
                        </div>
                        <div className="property">
                            <span>population:</span> {planet.population}
                        </div>
                        <div className="property">
                            <span>orbital_period:</span> {planet.orbital_period}
                        </div>
                        <div className="property">
                            <span>rotation_period:</span> {planet.rotation_period}
                        </div>
                        <div className="property">
                            <span>diameter:</span> {planet.diameter}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <Link to="/" className="btn btn-primary">
                        Back home
                    </Link>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};

