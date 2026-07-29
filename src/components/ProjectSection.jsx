import ProjectCard from './ProjectCard';
import '../styles/ProjectSection.css'; 

export default function ProjectSection() {
    return (
        <div id='projects' className='project'>
            <h1>Projects</h1>
            <div className='card-continer'>
            <ProjectCard name='Lost & Found System' description='A desktop application developed in Java that helps users report, search for, and manage lost and found items. Built collaboratively with a teammate, the project demonstrates object-oriented programming principles and teamwork while providing an organized way to reconnect people with their belongings.' tech='Tech Stack: Java' />
            <ProjectCard name='Company Portfolio' description='A responsive business website designed from a Figma prototype and developed using HTML, CSS, and JavaScript. The project focuses on clean UI design, responsive layouts, and creating a professional online presence for a company.' tech='Tech Stack: HTML, CSS, JavaScript, Figma'/>
            <ProjectCard name='Cinema Explorer' description='A modern movie discovery web application that integrates with a movie API to let users browse, search, and explore film information. The project showcases API integration, dynamic content rendering, and responsive frontend development.' tech='Tech Stack: HTML, CSS, JavaScript, REST API'/>
            <ProjectCard name='My Portfolio' description='A personal portfolio website built to showcase my skills, projects, and journey as a Software Engineering student and aspiring Full-Stack Developer. Designed with a modern, responsive interface, it highlights my technical expertise, development experience, and continuous growth.' tech='Tech Stack: React, HTML, CSS, JavaScript'/>
            <ProjectCard name='Coffee Traceability System (In Progress)' description="A collaborative web-based platform designed to improve transparency in Ethiopia's coffee supply chain. It enables farmers to register coffee batches, track their journey, and manage records in a centralized database. Currently transitioning from system design to implementation." tech='Tech Stack: Web Development, Database Design, System Analysis & Design'/>
            <ProjectCard name='Practice Projects' description='A collection of smaller projects built to strengthen my programming and problem-solving skills, including a Tic-Tac-Toe game, a To-Do List application, and a Tower of Hanoi solver.' tech='Tech Stack: HTML, CSS, JavaScript, Python'/> 
            </div>   
        </div>
    );
}