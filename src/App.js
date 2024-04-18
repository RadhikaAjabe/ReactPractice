//import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route}
from 'react-router-dom'

import './App.css';
import {useState} from 'react';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';



function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
      setAlert({
          type:type,
          msg:message
      })

      setTimeout(()=>{
            setAlert(null)       //alert should desappear after 1.5 sec
      }  , 1500)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode=(cls)=>{  //function
    removeBodyClasses()    //if we didn't do this if we click on one pallet it will show this colour on background.after that if we click on onother palate it will still shows privious clor on bg.therefore we must first remove previous className(i.e.  color)
    document.body.classList.add('bg-'+cls)   //adds css class to body element of webpage.its using string concatenation to create a class anmelike "bg-" flollowed by value of 'cls'
     /* if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'   //grey
        showAlert("Dark mode has been enabled","success")
      }else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled","success")
      }*/
  }
  return (
    <>
  {/*<Navbar tittle="Radhika App" aboutReact="About React"/>*/}
  <Router>
     
   <Navbar  aboutReact="About React"  mode={mode} toggleMode={toggleMode}/>   
     <Alert alert={alert}/> 
   <div  className='container'>   
      
       <Routes>
       {/*  <Route element={<Navbar  aboutReact="About React"  mode={mode} toggleMode={toggleMode}/>}>  */}
          
          <Route path='/' element={<TextForm heading="Word counter,character counter" mode={mode}  showAlert={showAlert}/>}/>
          
          <Route path='/about' element={ <About/>}/>
        
 {/* </Route>    */}

      </Routes>
   </div>
 </Router>

    </>
  );
}

export default App;

//container is boot strap class which puts container in middle