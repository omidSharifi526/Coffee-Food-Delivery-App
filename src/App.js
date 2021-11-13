import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom';
import { MainStyle } from './mainStyle';
import Landing from './components/LandingPage';
import Products from './components/Product';
import {productData,productDataTwo} from './components/Product/data'
import OurFeature from './components/OurFeature';
import Footer from './components/Footer';



function App() {
  return (
   <>
    <Router>
      <MainStyle/>
     <Landing/>
     <Products heading='تحویل پیتزا در کمترین زمان ممکن' data={productData} />
     <OurFeature/>
     <Products heading='با بهترین طعم ها در کنارتان هستیم' data={productDataTwo} />
     <Footer/>
     </Router>
     </>
    
  );
}

export default App;
