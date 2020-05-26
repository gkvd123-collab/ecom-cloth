import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import Header from './component/header-component/header-component'

function App() {
  return (
    <div >
    {/* <HomePage /> */}
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/Shop' component={Shop} />
    </Switch>
    
    </div>
  );
}

export default App;
