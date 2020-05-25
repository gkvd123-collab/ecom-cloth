import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'

const HatPage=()=>(
  <div>
    <h1>Hat pages</h1>
  </div>
)
function App() {
  return (
    <div >
    <HomePage name="Govind" />
    </div>
  );
}

export default App;
