const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characterStarWars: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			fethCharactersStarWars: () => {
				fetch('https://www.swapi.tech/api/people')
					.then(response => response.json())
					.then(data => {
						const characterPromises = data.results.map(character => {
							return fetch(character.url)
								.then(response => response.json())
								.then(characterData => {
									return {
										name: characterData.result.properties.name,
										gender: characterData.result.properties.gender,
										hairColor: characterData.result.properties.hair_color,
										eyeColor: characterData.result.properties.eye_color,
										description: characterData.result.description,
										birth_year: characterData.result.properties.birth_year,
										height: characterData.result.properties.height,
										skin_color: characterData.result.properties.skin_color,
										_id: characterData.result._id,
										uid: characterData.result.uid
									};
								});
						});

						Promise.all(characterPromises)
							.then(formattedData => {
								setStore({ characterStarWars: formattedData });
							})
							.catch(error => console.error(error));
					})
					.catch(err => console.error(err));
			},

			fethPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
					.then(response => response.json())
					.then(data => {
						const planetPromises = data.results.map(planet => {
							return fetch(planet.url)
								.then(response => response.json())
								.then(planetData => {
									return {
										name: planetData.result.properties.name,
										population: planetData.result.properties.population,
										terrain: planetData.result.properties.terrain,
										climate: planetData.result.properties.climate,
										orbital_period: planetData.result.properties.orbital_period,
										rotation_period: planetData.result.properties.rotation_period,
										diameter: planetData.result.properties.diameter,
										_id: planetData.result._id,
										uid: planetData.result.uid
									};
								});
						});
		
						Promise.all(planetPromises)
							.then(formattedData => {
								setStore({ planets: formattedData });
							})
							.catch(error => console.error(error));
					})
					.catch(err => console.error(err));
			},

			addToFavorite: (item) => {
                const store = getStore()
                setStore({ favorites:  [...store.favorites, item] });
            },

            removeFromFavorites: (item) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favItem => favItem.uid !== item.uid);
                setStore({ favorites: updatedFavorites });
            }

		}
	};
};

export default getState;
