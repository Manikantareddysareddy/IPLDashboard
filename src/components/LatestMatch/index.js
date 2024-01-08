// Write your code here
import './index.css'

const LatestMatch = props => {
  const {match} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = match
  return (
    <li className="list-container1">
      <div className="new-container">
        <div className="first-container">
          <p className="heading1">{competingTeam}</p>
          <p className="paras">{date}</p>
          <p className="paras">{venue}</p>
          <p className="paras">{result}</p>
        </div>
        <div className="image-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="new-team-image"
          />
        </div>
      </div>

      <div className="second-container">
        <h1 className="heading1">First Innings</h1>
        <p className="paras">{firstInnings}</p>
        <h1 className="heading1">Second Innings</h1>
        <p className="paras">{secondInnings}</p>
        <h1 className="heading1">Man Of The Match</h1>
        <p className="paras">{manOfTheMatch}</p>
        <h1 className="heading1">Umpires</h1>
        <p className="paras">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
