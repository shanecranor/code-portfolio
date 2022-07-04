import { categories, getLangsByCategory } from '../../constants/languages.tsx'
import { getProjectsByLanguages } from '../../constants/projects.tsx'
import React, { useState } from "react"
import Project from '../Project/Project.js'
export default function LanguagesAndProjects(){ 
	const [selected, setSelected] = useState('All')
	const selectedProjects = getProjectsByLanguages(getLangsByCategory(selected).map(l=>l.language))
	return(
	<section className='all-projects'>
	<section className='language-section'>
			{/* <h1>Programming Languages & Libraries</h1> */}
			<div className='category-buttons'>
			{categories.map(c => (<button className={selected === c ? "selected" : "not-selected"}onClick={() => setSelected(c)}>{c}</button>)) }
			</div>
			<div className='category-container'>
			{/* <div className='category-name'> {c}: </div> */}
			{getLangsByCategory(selected).map(
				langObj => (
				<span className='language'>
					<img src={langObj.img}/>
					{langObj.language}
				</span>
				))}
			</div>
	</section>
	<section className='selected-projects'>
		{selectedProjects.map((props) => (
				<Project {...props}/>
		))}	
	</section>
	</section>
	)
}