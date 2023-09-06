import styles from './skills.module.scss';
import React, {useState, useEffect} from 'react';
import fadeInOnScroll from 'utils/fadeInOnScroll';
import ThreeColumn from '@components/Layouts/ThreeColumn/ThreeColumn';


type SkillsListprops = {
    header: string;
    languages: string[];
}


const SkillsList: React.FC<SkillsListprops> = ({ header, languages }) => {
    return (
      <div className={styles.sectionInfo}>
        <h3 className={styles.overviewContainer}>{header}</h3>
        <ul>
            {languages.map((language, index) => (
                <li key = {index}>{language}</li>
            ))}
        </ul>
        
    </div>
    );
  };


const Skills = () => {
    const [isVisible, ref] = fadeInOnScroll();

    return (
        <>
        <div id = 'skills' className={`${styles.information} ${isVisible ? styles.visible : ''}`}>
            <h1 className={styles.Title}> Skills </h1>
            <div className={styles.pRel}> 
                <div className={styles.verticalLine}></div>
                <div className={styles.verticalLine2}></div>
                <ThreeColumn
                    className={styles.borderBottom}
                    leftColumn={
                        <SkillsList 
                        header='Back-End'
                        languages={['Django', 'Python', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'MySQL']}
                        />
                    }
                    middleColumn = {
                        <SkillsList 
                        header='Front-End'
                        languages={['React', 'Redux', 'AngularJS', 'Next', 'JavaScript', 'TypeScript', 'Bootstrap', 'SCSS', 'CSS']}
                        />
                    }
                    rightColumn = {
                        <SkillsList
                        header = 'Data Science'
                        languages={['Python', 'Tensoflow', 'PyTorch', 'Excel', 'Keras', 'Tableau', 'PowerBi']}
                        />
                    }
                />
            </div>
        </div>
        </>
    );
};

export default Skills;