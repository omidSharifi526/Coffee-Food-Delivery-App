import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom';
import { MainStyle } from './mainStyle';
import Landing from './components/LandingPage';


function App() {
  return (
   <>
    <Router>
      <MainStyle/>
    
     <Landing/>
     </Router>
     </>
    
  );
}

export default App;
