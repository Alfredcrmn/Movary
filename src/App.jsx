import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <>
      <MovieCard movie = {{
        title: "My movie",
        release_date: "1990",
      }}/>
    </>
    
  )
}
export default App
