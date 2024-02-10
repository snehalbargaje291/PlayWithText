import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const[mode, setMode]=useState('light');
  const[toggleText, setToggleText]=useState('DarkMode');
  const[alert, setAlert]=useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const[isColor,setIsColor]=useState();

  const handleColor = (newColor) => {
    setIsColor(newColor);
    document.body.style.backgroundColor = newColor;
  };
 
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light' && toggleText==='DarkMode'){
      setMode('dark');
      setToggleText('LightMode');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled!', 'success');
      setIsVisible(true);
      document.title="PlayWithText - DarkMode";
      //setInterval(()=>{
      //  document.title="Try differnt colors!";
      //},1500);
      //setInterval(()=>{
      //  document.title="Blue,Green,Red";
      //},2000);
    }
    else{
      setMode('light');
      setToggleText('DarkMode');
      document.body.style.backgroundColor='#87CEEB';
      showAlert('Light mode has been enabled!', 'success');
      setIsVisible(false);
      document.title="PlayWithText - LightMode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="PlayWithText" handleColor={handleColor} mode={mode} toggleText={toggleText} isVisible={isVisible} isColor={isColor} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="" element={
            <div className="container my-3">
              <TextForm mode={mode} showAlert={showAlert} heading="Enter Your Text Here:" />
            </div>
          } />
          <Route exact path="/about" element={
            <About handleColor={handleColor} mode={mode} />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
