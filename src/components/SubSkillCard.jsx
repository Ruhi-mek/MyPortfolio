import '../styles/SubSkillCard.css';

export default function SubSkillCard({logo, name}) {
    return (
        <div className='sub-card'>
            <img src={logo} alt={name} />
            <h3>{name}</h3> 
        </div>
    );
}
