import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from "react"; //imrs
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [alertMessage, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('dark mode has been enabled', 'danger');
      document.title = "TextUtils - Light Mode"
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils is Great Mode';
      }, 1500);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#19165a';
      showAlert('dark mode has been disabled', 'warning');
      document.title = "TextUtils - DARK Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alertMessage} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
