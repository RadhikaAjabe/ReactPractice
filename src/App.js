//import logo from './logo.svg';
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

  const toggleMode=()=>{        //function
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'   //grey
        showAlert("Dark mode has been enabled","success")
      }else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled","success")
      }
  }
  return (
    <>
   {/*<Navbar tittle="Radhika App" aboutReact="About React"/>*/}
   <Navbar  aboutReact="About React"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
  <div  className='container'>         {/*container is boot strap class which puts container in middle*/}
  <TextForm heading="Fill this Form" mode={mode}  showAlert={showAlert}/>           {/*put in div for proper formating*/}
  <About/>
  </div>
    </>
  );
}

export default App;
