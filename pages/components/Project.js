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
		let rect = target.getBoundingClientRect()
        setCoords({
          x: (event.clientX - rect.left-(target.offsetWidth/2))/target.offsetWidth,
          y: (event.clientY - rect.top-(target.offsetHeight/2))/target.offsetHeight,
        });
      };
    const style = { 
        "--t-x-1": (coords.x*-10) +"px",
        "--t-y-1": (coords.y*-10) +"px",
		"--t-b": (coords.y*coords.y+coords.x*coords.x)*10 +"px"
    }
	return(
	<article className='project-container'> 
		<header className='project-title-container'>
			<h2 className='project-title'  style={style} onMouseMove={handleMouseMove} data-text={title}>{title}</h2> 
		</header>
		<div className='project-contents'>
			<section className='project-tags'>
				Tags:
				{languages.map(lang => (
					<span key={`${lang}tag`} className='tag'>
						{lang}
					</span>
				))}
			</section>
			<section className='project-summary'>
				<p>{summary}</p>
			</section>
		</div>
	</article>
	)
}