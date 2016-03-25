const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <pre><code>
        {JSON.stringify(this.props.params)}
        </code></pre>
      </div>
    )
  }
}

const {object} = React.PropTypes

Details.propTypes = {
  params: object
}

module.exports = Details
