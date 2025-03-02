import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/post/')
      .then(response => {
        console.log("API Response:", response.data); // ✅ Check API response in console
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h2>Posts:</h2>
        {posts.length > 0 ? (
          posts.map((obj, index) => (
            <div key={index}>
              <h3>{obj.title}</h3>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
