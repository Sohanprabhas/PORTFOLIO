import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/SohanPrabhas_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF loading error:', error);
    setError('Failed to load PDF. Please try downloading instead.');
    setLoading(false);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
          {loading && (
            <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
              Loading PDF...
            </div>
          )}
          
          {error && (
            <div style={{ textAlign: "center", color: "#ff6b6b", padding: "20px" }}>
              {error}
              <br />
              <Button
                variant="outline-primary"
                href={pdf}
                target="_blank"
                style={{ marginTop: "10px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download PDF
              </Button>
            </div>
          )}

          {!error && (
            <Document 
              file={pdf} 
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
                  Loading PDF...
                </div>
              }
            >
              <Page 
                pageNumber={1} 
                scale={width > 786 ? 1.7 : 0.6}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;