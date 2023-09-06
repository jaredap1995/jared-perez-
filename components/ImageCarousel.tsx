import React, {useState, useRef, useEffect} from "react";
import styles from './ImageCarousel.module.scss'

const INTERVAL = 3000; // 5 seconds


const ImageCarousel: React.FC <{ images: string[] }> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % images.length);
        }, INTERVAL);

        return () => clearInterval(interval);
    }, [images]);

    return(
        <div className={styles.carouselContainer}>
            {images.map((imgSrc, index) => (
                <img 
                key = {imgSrc}
                src = {imgSrc}
                alt = {`Carousel Image ${index}`}
                className={index === activeIndex ? styles.active : ''}
                />
            ))}
        </div>
    )
}

export default ImageCarousel;



// const StickyImage: React.FC<StickyImageProps> = ({ src, alt }) => {
//     const [isInView, setIsInView] = useState(false);
//     const imgRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             entries => {
//                 entries.forEach(entry => {
//                     console.log(entry.target, 'is intersecting', entry.isIntersecting);
//                     setIsInView(entry.isIntersecting);
//                 });
//             },
//             {
//                 rootMargin: '0px',
//                 threshold: 0.4,
//             }
//         );
//         if (imgRef.current) {
//             observer.observe(imgRef.current);
//         }
        
//         return () => {
//             if (imgRef.current) {
//                 observer.unobserve(imgRef.current)
//             }
//         };
//     }, []);

//     console.log(isInView)
//     return (
//         <div className={styles.stickyContainer} ref = {imgRef}>
//             {isInView && <img src = {src} alt = {alt} />}
//             {/* Something here maybe */}
//             {/* {!isInView && <div> Loading... </div>} */}
//         </div>
//     );
// };

// export default StickyImage