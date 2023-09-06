import { useState, useEffect, useRef } from 'react';
import styles from '../pages/Introduction.module.scss';

const fadeInOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasScrolled, setHasScrolled]=useState(false)
    const elementRef = useRef(null)

    useEffect(()=> {
        const handleScroll = () => {
          setHasScrolled(true)
    
          const aboutMeElem = document.querySelector('.' + styles.aboutMe);
          if (aboutMeElem) {
            const rect = aboutMeElem.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >=0) {
              setIsVisible(true);
              window.removeEventListener('scroll', handleScroll);
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [hasScrolled])

      return [isVisible, elementRef]
}

export default fadeInOnScroll;