import styles from './Introduction.module.scss';
import React, {useState, useEffect} from 'react';
import fadeInOnScroll from 'utils/fadeInOnScroll';

const Introduction = () => {
  const [isVisible, ref] = fadeInOnScroll();
  const typewriterDuration = "Hello, I'm Jareddddd".length * 0.1;
  
  
  return (
    <>
      <div className={styles.header}>
        {("Hello, I'm Jared").split("").map((char, index) => (
          <h1 
          key = {index}
          style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          className={styles.char}
          >
            {char}
          </h1>
        ))}
        <br/>
        {/* {("Thank you for droppinng by").split("").map((char, index)=> (
          <h1
            key = {index}
            style={{ "--delay": `${(index + "Hello, I'm Jared".length) * 0.1}s` } as React.CSSProperties}
            className={styles.char}
          >
            {char}
          </h1> */}
        {/* ))} */}
          <br/>
          <div style={{ '--fade-in-delay': `${typewriterDuration}s` } as React.CSSProperties} className={styles.fadeIn}>
            <h2>
                Explore the page by scrolling or clicking on a link above
            </h2>
        </div>
          {/* {("Explore the page by scrolling or cliicking on a link above").split("").map((char, index)=>(
            <h2
              key={index}
              style={{ '--fade-in-delay': `${typewriterDuration}s` } as React.CSSProperties}
              className={styles.fadeIn}
            >
              {char}
            </h2>
          ))} */}
      </div>
      <div className={`${styles.aboutMe} ${isVisible ? styles.visible: ''}`}>
        <h2>About</h2>
        <p>
          Hey there! Thank you for dropping by! My name is Jared Perez and I am a data scientist, analyst, software engineer,
          exercise physiologist and sport scientist. 
          In my free time I like walking dogs, learning new technical skills, working on new engineering projects, olympic weightlifting, and jumping out of airplanes.
          I hope you enjoy exploring this webpage as much as I enjoyed making it and get to learn a little about me in the process.
          <br />
          <br />

          To learn more about my journey from exercise, sport, and coaching to data and engineering. Check out the 'My Story' page.
        </p>
        <br />
        <br />
        <a href="https://strong-eight.vercel.app/">See some more of my work</a>
      </div>
    </>
  );
};

export default Introduction;
