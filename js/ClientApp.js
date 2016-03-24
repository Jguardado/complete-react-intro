const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => (
    <div>
      <MyTitle title='whatever' color='rebeccapurple' />
      <MyTitle title='lol' color='papayawhip' />
      <MyTitle title='something weird' color='#f06d06' />
    </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
