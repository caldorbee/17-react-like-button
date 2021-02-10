import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [likes, setLikes] = useState('likes')

  useEffect(() => count === 1 ?  setLikes('like'): setLikes('likes'))
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count} {likes}
      </button>
    </div>
  )
}
export default App
