import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#102e61ff';
      document.body.style.color = 'white';
      showAlert("Dark mode is activated", "success");
      document.title = 'Sayooj Web - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color = 'black';
      showAlert("Light mode is activated", "success");
      document.title = 'Sayooj Web - Light Mode';
    }
  };

  return (
    <Router>
      <NavBar title="Sayooj" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Form showAlert={showAlert} mode={mode} />} />

          <Route path="/about" element={<About />} />
        </Routes>
                <Alert alert={alert}/>

      </div>
    </Router>
  );
}

export default App;
