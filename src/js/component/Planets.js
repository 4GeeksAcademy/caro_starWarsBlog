import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Planets = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div style={{ overflowX: 'scroll', display: 'flex' }}>
                <h1>Characters</h1>
                <div className="card-container d-flex">
                {store.planets.map((planet, index) => (
                    <div key={index} className="card mx-3 mb-3" style={{ width: '18rem' }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt={planet.name} />
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">
                                Population: {planet.population}<br />
                                Terrain: {planet.terrain}
                            </p>
                            <Link to={`/planets/${index}`} className="btn btn-primary">Learn More</Link>
                            <button className="btn btn-danger ml-2" onClick={() => actions.addToFavorite(planet)}>❤️</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </>
    );
};

export default Planets;

