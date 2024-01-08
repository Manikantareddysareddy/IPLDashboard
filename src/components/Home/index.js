// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const ArrayData = data.teams
    const updatedData = ArrayData.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsData} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <Link to="/" className="item-links">
            <div className="second-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo-image"
                />
                <h1 className="main-heading">IPL Dashboard</h1>
              </div>

              <ul className="ul-container">
                {teamsData.map(eachItem => (
                  <TeamCard eachTeam={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </Link>
        )}
      </div>
    )
  }
}

export default Home
