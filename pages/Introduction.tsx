import styles from './Introduction.module.scss';
import React, {useState, useEffect} from 'react';
import fadeInOnScroll from 'utils/fadeInOnScroll';

const Introduction = () => {
  const [isVisible, ref] = fadeInOnScroll();
  
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
        {("Thank you for droppinng by").split("").map((char, index)=> (
          <h1
            key = {index}
            style={{ "--delay": `${(index + "Hello, I'm Jared".length) * 0.1}s` } as React.CSSProperties}
            className={styles.char}
          >
            {char}
          </h1>
        ))}
        <br/>
        {("Explore the page by scrolling or cliicking on a link above").split("").map((char, index)=>(
          <h2
            key={index}
            style = {{ "--delay": `${(index + "Hello, I'm Jared Thank you for dropping by".length) * 0.1}s`} as React.CSSProperties}
            className={styles.char}
          >
            {char}
          </h2>
        ))}
      </div>
      <div className={`${styles.aboutMe} ${isVisible ? styles.visible: ''}`}>
        <h2>About</h2>
        <p>
          Hey there! I'm Jared Perez. I am an engineer, data scientist, 
          exercise physiologist and sport scientist. In my free time I like walking dogs,
          building new enginerring projects, olympic weightlifting, and jumping out of airplanes.
          I hope you enjoy exploring this webpage as much as I enjoyed making it and get to learn a little about me in the process.
          <br />
          <br />Enter some more cute quotes or lines or whatever
        </p>
      </div>
    </>
  );
};

export default Introduction;
