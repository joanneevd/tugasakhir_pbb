import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { LandingPage, Cashier, Home, Sukses } from './pages'
import About from './pages/About';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          
          <main>
            <Switch>
              <Route  path="/" component={LandingPage} exact/>
              <Route  path="/cashier" component={Cashier} exact/>
              <div>
              <NavbarComponent />
              <Route  path="/Home" component={Home} exact/>
              <Route  path="/About" component={About} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
              </div>
              
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
