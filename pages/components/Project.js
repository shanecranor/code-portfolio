import { languages, categories, getLangsByCategory } from '../constants/languages.tsx';
import { projects, getProjectsByLanguages } from '../constants/projects.tsx';
import { useState } from 'react';
export default function Project({eventName, year, title, summary, img, languages}){ 
	const [coords, setCoords] = useState({x: 0, y: 0});
    const handleMouseMove = event => {
		let target = event.target
		// while (target.className != 'project-container'){
		// 	target = target.parentElement
		// }
        setCoords({
          x: event.clientX - target.offsetLeft,
          y: 0,
        });
      };
    const style = { 
        "--title-origin-x": (coords.x) +"px",
        "--title-origin-y": (coords.y) +"px"
    }
	return(
	<div className='project-container'> 
		<div className='project-title-container'>
			<h2 className='project-title'  style={style} onMouseMove={handleMouseMove} data-text={title}>{title}</h2> 
		</div>
		<div className='project-contents'>
			<div className='project-tags'>
				Tags:
				{languages.map(lang => (
					<span className='tag'>{lang}</span>
				))}
			</div>
			{/* {img ? <img src={img}/> : <></>} */}
			<p className='project-summary'>{summary}</p>
		</div>
	</div>
	)
}