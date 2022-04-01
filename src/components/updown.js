import React from 'react';
import './app.css'

class UpDownApp extends React.Component {
  constructor() {
    super()
    this.increaseClick = this.increaseClick.bind(this)
    this.decreaseClick = this.decreaseClick.bind(this)
    this.state = {
      valueSate : 0
    }
  }
  increaseClick() {
    this.setState({
      valueSate: this.state.valueSate + 1
    })
  }
  decreaseClick() {
    if (this.state.valueSate > 0) {
      this.setState({
        valueSate: this.state.valueSate - 1
      })
    }
    else {
      return;
    }
  }
  render() {
    return(
      <div className="container">
        <div id='valueRender'>Value: {this.state.valueSate}</div>
        <div className='btn'>
          <button type="button" id="increaseBtn" onClick={() => this.increaseClick()}>Increase</button>        
          <button type="button" id="decreaseBtn" onClick={() => this.decreaseClick()}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default UpDownApp

