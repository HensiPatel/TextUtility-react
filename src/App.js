
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is on or not
  const [alert, setAlert] = useState('null'); //alert massage

  
  
  const showAlert = (message, type)=>
  {
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() => {    //this is for set time for alert to dismiss automatic but here it dismiss my whole site so i put it in comment 
        showAlert(null);
      }, 3000); 
  }

  const toggleMode = ()=>{
      // console.log(cls)
//document.body.classList.add('bg-'+cls)
      if(mode === 'light')
      {
          setMode('dark');
          document.body.style.background = '#0c0946';
          showAlert("Dark Mode Enable","success");
        //  document.title = 'TextUtiles - Dark Mode';
      }
      else
      {
          setMode('light');
          document.body.style.background = 'white';
          showAlert("Light Mode Enable","success");
         // document.title = 'TextUtiles - Light Mode';
      }
  }


  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">  
      <Switch>    
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">  
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter,Remove extra spaces " mode={mode} />               
            </Route>
            </Switch>  
      </div>
     </Router>
    </>
  );
}

export default App;
