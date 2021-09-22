import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Pokemon from './components/paginas/Pokemon'
import Items from './components/paginas/Items'


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Switch>
         
       <Route path="/" exact component={Inicio}/>
       <Route path="/Inicio" exact component={Inicio}/>

         <Route path="/pokemon" exact component={Pokemon}/>
         <Route path="/items" exact component={Items}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
