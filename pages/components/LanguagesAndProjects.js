import { languages, categories, getLangsByCategory } from '../constants/languages.tsx';
import { projects, getProjectsByLanguages } from '../constants/projects.tsx';
import React, { useState } from "react";
import Project from '../components/Project.js'
export default function LanguagesAndProjects(){ 
	const [selected, setSelected] = useState('All')
	const selectedProjects = getProjectsByLanguages(getLangsByCategory(selected).map(l=>l.language))
	return(
	<div className='main'>
	<section className='language-section'>
			<h1>Programming Languages & Libraries</h1>
			<div className='category-buttons'>
			{categories.map(c => (<button className={selected === c ? "selected" : "not-selected"}onClick={() => setSelected(c)}>{c}</button>)) }
			</div>
			<div className='category-container'>
			{/* <div className='category-name'> {c}: </div> */}
			{getLangsByCategory(selected).map(
				langObj => (<span className='language'><img src={langObj.img}></img>{langObj.language}</span>))}
			</div>

	</section>
	<section className='project-section'>
		{selectedProjects.map((props) => (
				<Project {...props}/>
		))}	
	</section>
	</div>
	)
}