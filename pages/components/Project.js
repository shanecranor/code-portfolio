import { languages, categories, getLangsByCategory } from '../constants/languages.tsx';
import { projects, getProjectsByLanguages } from '../constants/projects.tsx';

export default function Project({eventName, year, title, description, img}){ 
	return(
	<div className='project-container'>
		<h2 className='project-title'>{eventName}, {year}: {title}</h2>
		<div className='project-contents'>
			{img ? <img src={img}/> : <></>}
			<p className='project-description'>{description}</p>
		</div>
	</div>
	)
}