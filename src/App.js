import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import Auth from './components/Auth';
import { tokenAuthorizationContext } from './Contexts/TokenAuth';
import { useContext } from 'react';


function App(){
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorizationContext)

  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<Auth/>}/>
        <Route path='/register' element= {<Auth register/>}/>
        <Route path='/dashboard' element= {isAuthorized? <Dashboard/> : <Home/>}/>
        <Route path='/projects' element= {isAuthorized?  <Projects/>  : <Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
