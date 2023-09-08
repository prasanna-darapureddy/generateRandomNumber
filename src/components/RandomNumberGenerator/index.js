import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickGenerateBtn = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="card-container">
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              type="button"
              className="button"
              onClick={this.onClickGenerateBtn}
            >
              Generate
            </button>
            <p className="random-num">{number}</p>
          </div>
        </div>
      </>
    )
  }
}
export default RandomNumberGenerator
