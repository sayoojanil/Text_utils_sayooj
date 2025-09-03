import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Form(props) {

  const [text, setText] = useState('');

  // Convert to uppercase
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  // Convert to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Clear text
  const handleClearClick = () => {
    setText('');
    props.showAlert("Text has been cleared!", "success");
  };

  // Handle input change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="my-3">
      <h1>Convert Your Texts</h1>
      <div className="my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="form"
          rows="10"
        ></textarea>

        {/* Buttons */}
        <button className="btn btn-primary my-4" onClick={handleClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((word) => word !== "").length} Minutes to read</p>
        <h2 className="mb-5">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
