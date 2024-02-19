// DataTablePage.js
import React, { useState, useEffect } from 'react';

function DataTablePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.mass}</td>
              <td>{character.height}</td>
              <td>{character.hair_color}</td>
              <td>{character.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTablePage;
