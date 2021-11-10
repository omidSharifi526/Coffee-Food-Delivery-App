import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom';
import { MainStyle } from './mainStyle';
import Landing from './components/LandingPage';
import Products from './components/Product';
import {productData} from './components/Product/data'



function App() {
  return (
   <>
    <Router>
      <MainStyle/>
      
     <Landing/>
     <Products heading='تحویل پیتزا در کمترین زمان ممکن' data={productData} />
     
     </Router>
     </>
    
  );
}

export default App;
