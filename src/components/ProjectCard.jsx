import '../styles/ProjectCard.css';

export default function ProjectCard({name,description,tech}) {
    return(
        <div className='card'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{tech}</p>
        </div>
    );
}