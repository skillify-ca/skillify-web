import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

export const DownloadButton = ({ document }) => {

    return (
        <div className='fixed bottom-0 left-0 w-full bg-gray-200'>
            <PDFDownloadLink document={document} fileName='Downloaded_PDF' style={{ color: 'black' }}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>
        </div>
    );
}
