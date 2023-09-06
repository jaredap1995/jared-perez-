import { useRouter } from 'next/router';


const PDFViewer: React.FC = () => {
    const router = useRouter()
    const { pdfName } = router.query;

    if (!pdfName) return null;

    return (
        <div style = {{ width: '100%', height: '100vh'}}>
            <object 
            data = {`/${pdfName}`}
            type='application/pdf'
            width = "100%"
            height = "100%">
            <p> This browser does not support PDF rendering. Please <a href={`/${pdfName}`}>download the PDF</a> to view it.</p>
            </object>
        </div>
    );
};

export default PDFViewer;