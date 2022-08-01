import { categories, getLangsByCategory } from '../../constants/languages.ts'
import { getProjectsByLanguage, getProjectsByTag, projects } from '../../constants/projects.ts'
import React from "react"
import Project from '../Project/Project.js'
import Router, { useRouter } from "next/router";
export default function LanguagesAndProjects() {
	const { query } = useRouter();
	const [selected, setSelected] = [
		query.category || 'All',
		(category) => (Router.push(
			{ query: { ...query, category: category } },
			undefined,
			{ shallow: true }
		))
	]
	const selectedProjects = getProjectsByTag(selected)
	return (
		<section className='all-projects'>
			<section className='language-section'>
				{/* <h1>Programming Languages & Libraries</h1> */}
				<div className='category-buttons'>
					{categories.map(c => (<button className={selected === c ? "selected" : "not-selected"} onClick={() => setSelected(c)}>{c}</button>))}
				</div>
				<div className='category-container'>
					{/* <div className='category-name'> {c}: </div> */}
					{getLangsByCategory(selected).map(
						langObj => (
							<span className='language'>
								<img src={langObj.img} />
								{langObj.language}
							</span>
						))}
				</div>
			</section>
			<section className='selected-projects'>
				{selectedProjects.map((props, index) => (
					<Project data={props} onClick={() => Router.push(
						{ query: { ...query, project: index } },
						undefined,
						{ shallow: true }
					)} />
				))}
			</section>
		</section>
	)
}