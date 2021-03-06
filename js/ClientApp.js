const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { shows } = require('../public/data')

const App = React.createClass({
  assignShow (nextState, replace) {
    console.log('this function is being called')

    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    if (showArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows}/>
          <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
