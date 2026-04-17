import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const DirectorList = () => {
  const { directors } = useOutletContext()

  const displayDirectors = directors.map(d => (
    <li key={d.id}>
      <Link to={`/directors/${d.id}`}>{d.name}</Link>
    </li>
  ))

  return (
    <ul>
      {displayDirectors}
      <li><Link to="/directors/new">Add New Director</Link></li>
    </ul>
  );
}

export default DirectorList;