import Link from 'next/link';
import papers from '../../data/papers_data';
import styles from './index.module.scss';

interface Paper {
    title: string;
    authors: string[];
    summary: string;
    pdfName: string;
}

const PapersList: React.FC = () => {
    return (
        <div>
            <h1 className={styles.title}> Research Papers </h1>
            {papers.map((paper: Paper) => (
                <div className = {styles.paperContainer} key={paper.pdfName}>
                    <h2 className={styles.paperTitle}> {paper.title} </h2>
                    <p className={styles.authors}> Authors: {paper.authors.join(', ')}</p>
                    <p><strong>Summary: </strong> {paper.summary} </p>
                    <Link href={`/pdf/${paper.pdfName}.pdf`}>
                        <a className={styles.linkStyle}> Read Full Paper </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};


export default PapersList;

