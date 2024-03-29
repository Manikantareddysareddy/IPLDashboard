import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="old-list-container">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
