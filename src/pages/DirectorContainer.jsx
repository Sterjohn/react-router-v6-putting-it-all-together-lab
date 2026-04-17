import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => {
        if (!r.ok) { throw new Error("failed to fetch directors") }
        return r.json()
      })
      .then(setDirectors)
      .catch(console.log)
  }, [])

  function addDirector(director) {
    setDirectors(prev => [...prev, director])
  }

  function updateDirector(updated) {
    setDirectors(prev => prev.map(d => d.id === updated.id ? updated : d))
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        {/* Pass directors and setters via outlet context */}
        <Outlet context={{ directors, addDirector, updateDirector }} />
      </main>
    </>
  );
};

export default DirectorContainer;