import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const character = store.characterStarWars[params.theid];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{character.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero non dui aliquet ullamcorper. Duis sit amet nulla a quam eleifend vulputate. Ut lacinia elit ac odio placerat fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vitae leo nec odio vehicula tincidunt. In hac habitasse platea dictumst. Sed egestas elit a urn
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="red-line"></div>
                    <div className="properties-container">
                        <div className="property">
                            <span>Birth Year:</span> {character.birth_year}
                        </div>
                        <div className="property">
                            <span>Gender:</span> {character.gender}
                        </div>
                        <div className="property">
                            <span>Height:</span> {character.height}
                        </div>
                        <div className="property">
                            <span>Skin Color:</span> {character.skin_color}
                        </div>
                        <div className="property">
                            <span>Eye Color:</span> {character.eyeColor}
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

Single.propTypes = {
    match: PropTypes.object
};
