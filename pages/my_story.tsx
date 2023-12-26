import Link from 'next/link';
import styles from './my_story.module.scss';
import TwoColumn from '@components/Layouts/TwoColumn/TwoColumn_story';
import fs from 'fs';
import path from 'path';
import ImageCarousel from '@components/ImageCarousel';
import TextCarousel from '@components/Layouts/TextCaorusel';


export const getStaticProps = async () => {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const imageNames = fs.readdirSync(imagesDirectory);

    return {
        props: {
            imageNames
        }
    };
};


const Story: React.FC < { imageNames: string [] }> = ({ imageNames }) => {

    const textSections: React.ReactNode[] = [
        <>
            I have been working in data science and engineering consistenly for about three years since beginning of 2021. I have a total of 5 years of experience in data science, AI, engineering, and analytics across multiple domains including sport performance, health care, and academia. I got my first exposure working in data analytics during my masters degree in England when I worked for the Premiership Newcastle Falcons Rugby Club. 
            <br />
            <br />
            This role focused on extracting the plethora of player data that was collected from the players’ GPS sensors, force plates, velocity sensors etc. and organizing it to create specific player profiles. This was mainly done in excel and in collaboration with a team of fellow sport scientists. 
            <br />
            <br />
            In this role I got my first foray into data, simultaneously managing the team postgres instance and using excel to create visualizations to show coaches how the players were responding to their training programs. 
            <br />
            <br />
            After this experience I briefly returned to coaching at Google in San Francisco before my PhD during the COVID-19 pandemic. I loved my time in England so much I decided to pursue my PhD abroad as well, this time in New Zealand.
        </>
        ,
        <>
            My PhD was initially in Exercise Physiology and Biochemistry during which I aimed to investigate the role of ovarian hormone fluctuations on exercise redox biology and downstream performance and adaptations in athletes. If interested in this topic, check out my <Link href ={`/pdf/ovarian_hormones_.pdf`}> narrative review</Link>.
            <br />
            <br />
            Unfortunately, this topic turned out to be too logistically challenging, so under the advice of world renowned biomechanist <Link href = 'https://academics.aut.ac.nz/patria.hume'> Dr. Patria Hume</Link> I turned my eyes to data science and web development within health and performance.
            <br />
            <br />
            Partnering with Auckland Bioengineering Institute, I hoped to find a way to use physiological data to individualize and optimize training routines, rehab protocols, hospital care, medical treatment, and behvarioal interventions. My ultimate goal was to build a <Link href = 'https://www.auckland.ac.nz/en/news/2023/05/03/How-digital-twins-will-revolutionise-health.html'> Human Digital Twin</Link>, which aimed to use ubiquitously available sensors like the ones found in our smartphones, wearables, computers, and home devices to simulate our responses to stress and ultimately predict both acute and longitudinal health, behavioral, and performance outcomes. This was a pretty herculean goal (as all PhD ideas usually are at first) and ultimately could not come to fruition due to layoffs at my university and a lack of funding. However, in this program my passion for data science, AI, and engineering was born!
        </>
        ,
        <>
            I withdrew from my PhD to pursue industry opportunities and focus on improving my programming and data skills. I enrolled in a data science and analytics bootcamp through UC Berkeley from which I recently graduated that taught me so much more than I ever thought I could know. It was an amazing experience where we covered so many topics including Python, JavaScript, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, PostgreSQL, GIT, AWS, Flask, Command Line, Shiny, Tableau, Excel, Seaborn, Scikit learn, TensorFlow, Databasing, BeautifulSoup, Web Scraping, NodeJS, Apache Flink, Apache Spark, Hadoop.
            <br />
            <br />
            During this time I also built out and worked on multiple personal projects challenging and growing my technical skills in some areas of personal interest. This included building a web app with streamlit to support my coaching and fitness business. This project required me to develop a cloud hosted postgres instance to store all of my clients data, build the web app from scratch, connect to the database, allow users to modify and record what they completed, and integrate dynamic visualizations for users to track and record their progress. I am most proud of this project due to the impact it had including reducing my admin overhead, allowing users to track progress, and integrating an ensemble Tensorflow and Sci-Kit learn model to provide prescription support. 
        </>
        ,
        <>
            My projects also include developing labeling functions to identify periods of increased activity from unlabelled accelerometer data. A Django web app that uses computer vision to count reps and provide force and velocity estimates with respect to real world dimensions and estimate neuromuscular fatigue. A webscraper that can scrape the reviews from any Amazon product by using a headless browser to navigate to the search page, select the number of products the user desires and return all the reviews in a JSON object that is stored in a postgres JSONB format.
            <br />
            <br />
            Most recently my biggest project has been, you guessed it, this website! For a first time using React and TSX it has been an awesome learning experience and I am happy to be able to have a place I can host my information and people can go to learn more about me, my experiences, and my story. 
            <br />
            <br />
            I feel lucky to have been able to learn as much as I have in such a short period of time. I can honestly say the only other thing I have ever loved to do this much was coaching and exercise physiology, and having done that for over a decade in every form and at every professional level, it is really motivating and inspiring to pursue something else I love with the same amount of passion I had before. I can't wait for what comes next in my career journey
        </>
        
    ]

    return (
        <div id='story' className={styles.header}>
            <h1> My Story </h1>
            <TwoColumn
                leftColumn = { 
                <div className={styles.images}>
                    <div style = {{ width: '80%', height: '40vh'}}>
                            <ImageCarousel images = {imageNames.map(name => `/images/${name}`)} />
                    </div>
                </div>
                }
                rightColumn = {
                    <div>
                        <TextCarousel sections={textSections}/>
                    </div>
                }
            />
        </div>
    )
}

export default Story;


