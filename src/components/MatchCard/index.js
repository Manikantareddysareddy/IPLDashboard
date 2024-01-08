// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchItem} = props
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
  } = matchItem

  const matchStatusClassName = matchStatus === 'Won' ? 'won-para' : 'loss-para'

  return (
    <li className="recent-list-container">
      <img
        src={competingTeamLogo}
        className="recent-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-heading">{competingTeam}</p>
      <p className="competing-para">{result}</p>
      <p className={` ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
