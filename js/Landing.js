const React = require('react')

const Landing = () => (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>Videos</h1>
        <input className='search' type='text' placeholder='Search'/>
        <button className='browse-all'> or Browswe All</button>
      </div>
    </div>
)

module.exports = Landing
