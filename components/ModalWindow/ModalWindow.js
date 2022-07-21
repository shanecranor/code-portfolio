import { categories, getLangsByCategory } from '../../constants/languages.tsx'
import { getProjectsByLanguages } from '../../constants/projects.tsx'
import React, { useState } from "react"
export default function ModalWindow({ selectedProject, setProject }) {

	const { eventName, year, title, summary, description, img, languages, links } = selectedProject;
	return (
		<article className='modal-window'>
			<div className='prev-project' onClick={() => setProject(old => old - 1)}>
				<div className='left-arrow' />
			</div>
			<div className='container'>


				<header className='project-title-container'>
					<h2 className='project-title'>{title}</h2>
				</header>
				<div className='project-contents'>
					<section className='project-tags'>
						{languages.map(lang => (
							<span key={`${lang}tag`} className='tag'>
								{lang}
							</span>
						))}
					</section>
					<section className='project-description'>
						<p>{description}</p>
					</section>
				</div>

			</div>
			<div className='next-project' onClick={() => setProject(old => old + 1)} >
				<div className='right-arrow' />
			</div>
		</article>
	)
}