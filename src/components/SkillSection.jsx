import SkillCard from './SkillCard';
import SubSkillCard from './SubSkillCard';
import '../styles/SkillSection.css';

import html5 from '../assets/html5.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import python from '../assets/python.svg';
import java from '../assets/java.svg';
import mysql from '../assets/mysql.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import vscode from '../assets/vscode.svg';
import npm from '../assets/npm.svg';
import figma from '../assets/figma.svg';

export default function SkillSection() {
    return(
        <div id='skills' className='skill'> 
            <h1>My Skills</h1>
            <div className='skill-cards-container'>
                <SkillCard>
                    <h2>Frontend</h2>
                    <SubSkillCard logo={html5} name='HTML5'/>
                    <SubSkillCard logo={css} name='CSS'/>
                    <SubSkillCard logo={javascript} name='JavaScript'/>
                    <SubSkillCard logo={react} name='React'/>
                </SkillCard>

                <SkillCard>
                    <h2>Backend</h2>
                    <SubSkillCard logo={python} name='Python'/>
                    <SubSkillCard logo={java} name='Java'/>
                    <SubSkillCard logo={mysql} name='MySQL'/>
                </SkillCard>

                <SkillCard>
                    <h2>Tools</h2>
                    <SubSkillCard logo={git} name='Git'/>
                    <SubSkillCard logo={github} name='GitHub'/>
                    <SubSkillCard logo={vscode} name='VS Code'/>
                    <SubSkillCard logo={npm} name='npm'/>
                    <SubSkillCard logo={figma} name='Figma'/>
                </SkillCard>

                <SkillCard>
                    <h2>Professional Skills</h2>
                    <ul>
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Communication</li>
                        <li>Continuous Learning</li>
                        <li>Time Managemen</li>
                    </ul>
                </SkillCard>
            </div>
        </div>
    );
}
