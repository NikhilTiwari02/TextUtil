// import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import  Textform from './components/Textform';
import About from './components/about';
import Alert from './components/Alert';
import React,{useState} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [Mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null);
  const toggleMode=()=>{
    if(Mode==="light"){
      document.body.style.backgroundColor="#041C32";
    setMode("dark");
  }
    else {
      document.body.style.backgroundColor="white";
      setMode("light");
    }
  }
// const [message,setmessage]=useState()
 const showalertmsg=(type)=>{
     setAlert(type);
     setTimeout(()=>{
       setAlert(null);
      //  setmessage(null);
     },1000)
 }
  return (  
  <>
  <Router>
  <Navbar title="TextUtil" about="About us" mode={Mode} toggleMode={toggleMode}/>
  <Alert alertType={alert}/>

  <div className="container">
{/* renders the first one that matches the current URL. */}
          {/* if path is /about render the about part */}
          <Routes>
          <Route path="/Textutil"
        element={<Textform heading="Enter the text to analyze" mode={Mode} alert={showalertmsg} />}/>
          <Route path="/about"
             element={<About mode={Mode}/>}/>
          {/* if path is /the render the same page */}
          
        </Routes>
  </div>
  </Router>
  </>
  );
}
export default App;
