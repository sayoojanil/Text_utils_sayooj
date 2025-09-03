import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  // Calculate statistics whenever text changes
  useEffect(() => {
    const words = text.split(/\s+/).filter(word => word !== '');
    setWordCount(words.length);
    setCharCount(text.length);
    setReadingTime(words.length * 0.008);
  }, [text]);

  // Convert to uppercase
  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  // Convert to lowercase
  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Clear text
  const handleClear = () => {
    setText('');
    props.showAlert("Text has been cleared!", "success");
  };

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  // Remove extra spaces
  const handleRemoveSpaces = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  // Capitalize each word
  const handleCapitalize = () => {
    const newText = text.replace(/\b\w/g, c => c.toUpperCase());
    setText(newText);
    props.showAlert("Text capitalized!", "success");
  };

  // Handle input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white py-3">
              <h2 className="h5 mb-0">Professional Text Converter</h2>
              <p className="mb-0 small">Transform your text with ease</p>
            </div>
            
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="textArea" className="form-label fw-semibold">Enter your text:</label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="8"
                  value={text}
                  onChange={handleChange}
                  placeholder="Start typing or paste your text here..."
                />
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-primary" 
                  onClick={handleUppercase}
                  title="Convert to uppercase"
                >
                  UPPERCASE
                </button>
                
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-primary" 
                  onClick={handleLowercase}
                  title="Convert to lowercase"
                >
                  lowercase
                </button>
                
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-primary" 
                  onClick={handleCapitalize}
                  title="Capitalize each word"
                >
                  Capitalize Words
                </button>
                
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-info text-white" 
                  onClick={handleRemoveSpaces}
                  title="Remove extra spaces"
                >
                  Remove Extra Spaces
                </button>
                
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-success" 
                  onClick={handleCopy}
                  title="Copy to clipboard"
                >
                  Copy Text
                </button>
                
                <button 
                  disabled={text.length === 0} 
                  className="btn btn-danger" 
                  onClick={handleClear}
                  title="Clear all text"
                >
                  Clear Text
                </button>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="card bg-light mb-4 mb-md-0">
                    <div className="card-header bg-transparent py-2">
                      <h3 className="h6 mb-0">Text Summary</h3>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                        <span>Words:</span>
                        <span className="fw-semibold">{wordCount}</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                        <span>Characters:</span>
                        <span className="fw-semibold">{charCount}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Reading Time:</span>
                        <span className="fw-semibold">{readingTime.toFixed(2)} minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card bg-light">
                    <div className="card-header bg-transparent py-2">
                      <h3 className="h6 mb-0">Text Preview</h3>
                    </div>
                    <div className="card-body" style={{minHeight: '150px'}}>
                      {text.length > 0 ? (
                        <div className="text-break">{text}</div>
                      ) : (
                        <p className="text-muted fst-italic">Nothing to preview. Start typing to see your text here.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-footer bg-light py-3 text-center">
              <small className="text-muted">
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  showAlert: PropTypes.func.isRequired
};