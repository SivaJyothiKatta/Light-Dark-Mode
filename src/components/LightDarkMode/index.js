// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightOn: true}

  lightMode = () => {
    const {isLightOn} = this.state

    if (isLightOn === true) {
      this.setState({isLightOn: false})
    } else {
      this.setState({isLightOn: true})
    }
  }

  render() {
    const {isLightOn} = this.state
    const lightMode = isLightOn ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={`bg-container ${lightMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          {isLightOn ? (
            <button
              onClick={this.lightMode}
              className="button-mode"
              type="button"
            >
              Light Mode
            </button>
          ) : (
            <button
              onClick={this.lightMode}
              className="button-mode"
              type="button"
            >
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
