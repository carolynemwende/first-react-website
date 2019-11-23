import React from 'react';
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends React.Component{
  render(){
    return( 
        <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          {/* <Route path='/about' component={About} /> */}
        </Switch>
      </Router>
    )
  }

}

export default App;
