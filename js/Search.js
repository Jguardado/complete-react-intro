const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  propTypes: {
    route: object
  },

  handleSearchTermEvent (e) {
    this.setState({ searchTerm: e.target.value })
  },

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Videos</h1>
          <input onChange={this.handleSearchTermEvent} value={this.state.searchTerm} className='search-input' type='text' placeholder='Search'/>
        </header>
        <div className='shows'>
        {this.props.route.shows
          .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((show) => (
            <ShowCard {...show} key={show.imdbID} />
        ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
