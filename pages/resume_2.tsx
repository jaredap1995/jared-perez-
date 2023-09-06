import * as React from 'react';

import Resume_2Data from '@public/resume_2.json'
import styles from './Resume.module.scss';
import TwoColumn from '@components/Layouts/TwoColumn/TwoColumn';
import fadeInOnScroll from 'utils/fadeInOnScroll';
import Link from 'next/link';


// Define type of parameters
interface Education {
    college: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
}

// defins variable that allows mapping
interface EducationProps {
    education: Education
}

// maps the education props var (which is a consolidated education) to specifci styles and content
// within the page as a variable
const Education = ({ education }: EducationProps) => {
    return (
        <div className={styles.Education}>
            <div className={styles.sectionInfoHeader}>
                <span>
                    <h3> {education.degree} </h3>
                    <h4> {education.college} </h4>
                </span>
                <span className={styles.sectionInfodates}>
                    {education.startDate} - {education.endDate}
                </span>
            </div>
        </div>
    );
};

type Responsibility = 
    | string 
    | {
        text: string[];
        link: {
            filename: any;
            url: string;
            label: string;
        };
    };

type Experience = {
    company?: string;
    title?: string;
    startDate?: string;
    endDate?: string;
    responsibilities: Responsibility[];
}

type ExperienceProps = {
    experience: Experience;
}


const Experience = ({ experience }: ExperienceProps) => {
    return (
        <div className={`${styles.sectionInfo} ${styles.experience}`}>
            <div className={styles.sectionInfoHeader}>
                <span>
                    <h3 className={styles.company}>{experience.company}</h3>
                    <h4 className={styles.title}>{experience.title}</h4>
                </span>
                <span className={styles.sectionInfoDates}>
                    {experience.startDate} - {experience.endDate}
                </span>
            </div>
            <ul className={styles.sectionInfoPoints}>
                {experience.responsibilities.map((point, index) => {
                    if (typeof point === 'object' && point.link) {
                        return (
                            <div key = {index}>
                                {point.text.map((sentence,sIndex)=> (
                                    <li className={styles.info} key={sIndex}>
                                    {sentence}
                                    </li>
                                ))}
                                {point.link && (
                                    <Link href={`${point.link.url}`}>
                                        <a target="_blank" rel="noopener noreferrer">
                                        {point.link.label}
                                        </a>
                                    </Link>
                                )}
                            </div>
                        );
                    } else {
                        return (
                            <li className={styles.info} key={index}>
                                {point}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    )
}

interface Projects {
    title: string;
    impact: string [];
    technologies_used: string;
    link: string
}

interface ProjectsProps {
    projects: Projects
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <div className={`${styles.sectionInfo} ${styles.experience}`}>
            <div className={styles.sectionProjects}>
                <span>
                    <h3 className={styles.company}>{projects.title}</h3>
                    <p> <strong> Technologies Used: </strong>{projects.technologies_used}</p>
                    <Link href = { `${projects.link}`}>
                        <a target = "_blank" rel = "noopener no referrer">
                            {projects.link}
                        </a>
                    </Link>
                </span>
            </div>
            <ul className={styles.sectionInfoPoints}>
                {projects.impact.map((sentence, pindex) => (
                    <li className={styles.info} key = {pindex}>
                        {sentence}
                    </li>
                ))}
            </ul>
            <div className={styles.sectionProjects}>
                <span>
        
                </span>
            </div>
        </div>
    )
}





const Resume_2 = () => {
    const [isVisible, ref] = fadeInOnScroll();

    return (
        <div id="resume" className={`${styles.information} ${isVisible ? styles.visible : ''}`}>
            <h1 className={styles.resumeTitle}> Resume </h1>
            <div className={styles.pRel}>
                <div className={styles.verticalLine}></div>

                <TwoColumn
                    className={styles.borderBottom}
                    leftColumn={<span> Education </span>}
                    rightColumn=
                    {Resume_2Data.education.map((school, index) => (
                        <Education key={index} education={school}></Education>
                    ))}
                />

                <TwoColumn
                    className={styles.borderBottom}
                    leftColumn={<span> Experience </span>}
                    rightColumn={Resume_2Data.experience.map((job, index) => (
                        <Experience key={index} experience={job}></Experience>
                    ))}
                />

                <TwoColumn 
                    className={styles.borderBottom}
                    leftColumn = {<span id='projects'> <strong> Projects </strong></span>}
                    rightColumn = {Resume_2Data.Projects.map (( proj, index ) => (
                        <Projects key = {index} projects={proj}></Projects>
                    ))}
                />

                <TwoColumn 
                    className={styles.borderBottom}
                    leftColumn = {<span> Research Experience </span>}
                    rightColumn = {
                        <Link href = "/research_papers">
                            <a> Explore My Research Experience </a>
                        </Link>
                    }
                />
            </div>
        </div>

    );
};

export default Resume_2