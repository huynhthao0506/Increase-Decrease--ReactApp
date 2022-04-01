import React from 'react';
import ReactDOM, { render } from 'react-dom';
import UpDownApp from './components/updown';

class Root extends React.Component {
  constructor() {
        super()
    }
    render() {
      return (
        <React.StrictMode>
            <UpDownApp />
        </React.StrictMode>
      )
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'))


