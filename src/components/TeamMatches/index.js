import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {bannerImage: '', latestMatch: {}, recentMatch: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBanner = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatchDetails = data.recent_matches
    const updatedRecentMatchDetails = recentMatchDetails.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      isLoading: false,
      bannerImage: teamBanner,
      latestMatch: updatedLatestMatch,
      recentMatch: updatedRecentMatchDetails,
    })
  }

  render() {
    const {bannerImage, isLoading, latestMatch, recentMatch} = this.state
    return (
      <div className="bg-container1">
        {isLoading ? (
          <div>
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              className="loader"
            />
          </div>
        ) : (
          <div>
            <img src={bannerImage} className="banner-image" alt="team banner" />
            <p className="para1">Latest Matches</p>
            <LatestMatch match={latestMatch} />
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
