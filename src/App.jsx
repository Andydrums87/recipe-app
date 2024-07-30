
import  {HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import './App.css'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar/Sidebar'
// import Search from "./components/Search"
// import OrderBy from './components/OrderBy'
// import Card from './components/Card'



function App() {

  
  return (
    
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/recipe" element= {<Recipe/>}/>
    </Routes>

   
  )
}

export default App;
