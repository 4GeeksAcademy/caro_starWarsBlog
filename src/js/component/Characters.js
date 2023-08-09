import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';

const Characters = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div style={{ overflowX: 'scroll', display: 'flex' }}>
                <h1>Characters</h1>
                <div className="card-container d-flex">
                    {store.characterStarWars.map((character, index) => (
                        <div key={index} className="card mx-3 mb-3" style={{ width: '18rem' }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">
                                    Gender: {character.gender}<br />
                                    Hair color: {character.hairColor}<br />
                                    Eye color: {character.eyeColor}
                                </p>
                                <Link to={"/single/" + index} className="btn btn-primary">Learn More</Link>
                                <button className="btn btn-danger ml-2" onClick={() => actions.addToFavorite(character)}>❤️</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Characters