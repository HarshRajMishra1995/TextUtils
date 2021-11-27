import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import Navabar from "./components/Navabar";
import TextForm from "./components/TextForm";


//import './App.css';
function App() {

  const [mode,setMode]=useState('light');

  const [modeText,setModeText]=useState('light');

  const [text,setText]=useState('Dark Mode');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const ToggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark');
      setModeText('dark');
      setText('Light Mode')
      document.body.style.backgroundColor="#495057";
      document.body.style.color="white";
      showAlert('Dark Mode Enabled','success');
    }
    else{
      setMode('light')
      setModeText('light')
      setText('Dark Mode')
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert('Light Mode Enabled','success');
    }
  }
  return (
   <>
		<Navabar title="Text Utils" togglemode={ToggleMode} mode={mode} modeText={modeText} text={text}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm heading="Enter the Text Below"/>
    </div>
    {/* <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/">
          
          </Route>
        </Switch> */}
	</>
  );
}

export default App;
