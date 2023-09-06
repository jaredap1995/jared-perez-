import React, { useState, useEffect } from 'react';
import styles from './TextCarousel.module.scss'

type TextCarouselProps = {
    sections: React.ReactNode [];
}

const TextCarousel: React.FC<TextCarouselProps> = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [fadeTimeout, setFadeTimeout] = useState<any>(null);

    useEffect(() => {
        return () => {
            if (fadeTimeout) {
                clearTimeout(fadeTimeout)
            }
        };
    }, [fadeTimeout]);

    const goToNextSection = () => {
        setIsVisible(false);
        setFadeTimeout(
            setTimeout(() => {
                setActiveIndex(prev => Math.min(sections.length -1, prev + 1));
                setIsVisible(true);
            }, 500)
        );
        // if (activeIndex < sections.length - 1) {
        //     setActiveIndex(prev => prev+1);
        // };
    };

    const goToPreviousSection = () => {
        setIsVisible(false);
        setFadeTimeout(
            setTimeout(() => {
                setActiveIndex(prev => Math.max(0, prev -1));
                setIsVisible(true);
            }, 500)
        );
        // if (activeIndex > 0) {
        //     setActiveIndex(prev => prev-1);
        // };
    };

    return (
        <div>
            <p className={`${styles.textContent} ${!isVisible ? styles.hidden : ''}`}>{sections[activeIndex]}</p>
            <div>
                {activeIndex !== 0 && (<button className = {styles.button} onClick = {goToPreviousSection} disabled = {activeIndex === 0}> Previous Page </button>)}
                {activeIndex !== sections.length -1 && (<button className = {styles.button} onClick={goToNextSection} disabled = {activeIndex === sections.length - 1}> Next Page </button>)}
            </div>
        </div>
    );
};

export default TextCarousel;