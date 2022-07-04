export default function FeaturedProjects({title, description}){  
    return (
        <article className="project">
            <header>{title}</header>
            <p className="description">
                {description}
            </p>
        </article>
    )
}