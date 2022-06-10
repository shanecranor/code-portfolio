import { languages, categories, getLangsByCategory } from '../constants/languages.tsx';
import React, { useState } from "react";
export default function Languages(){ 
	const [selected, setSelected] = useState('All')
	return(
	<section className="language-section">
			<h1>Programming Languages & Libraries</h1>
			<div className='category-buttons'>
			{categories.map(c => (<button onClick={() => setSelected(c)}>{c}</button>)) }
			</div>
			<div className='category-container'>
			{/* <div className='category-name'> {c}: </div> */}
			{getLangsByCategory(selected).map(
				langObj => (<span className='language'><img src={langObj.img}></img>{langObj.language}</span>))}
			</div>	
	</section>
	)
}