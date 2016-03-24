const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')
const Search = require('./Search')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search}/>
  </Router>

)

ReactDOM.render(<App />, document.getElementById('app'))
