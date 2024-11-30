import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'



function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1> ...Nikkis with code  full stack...</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={jokes.id}>
            <h3>{joke.tittle}</h3>
            <p>{joke.content}</p>
          </div>
        )) 

        }
      
    </>
  )
}

export default App
