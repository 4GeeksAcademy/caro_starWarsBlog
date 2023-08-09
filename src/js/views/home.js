import React, {useContext}from 'react'
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Characters from '../component/Characters';
import Planets from '../component/Planets';

export const Home = () => {
	const {store, action} = useContext(Context)
	return(
		<div className="text-center mt-5">
			<Characters/>
			<Planets/>
		</div>
	)
}
