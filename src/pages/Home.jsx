import MovieCard from "../components/MovieCard";
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: 'Star Wars', release_date: '1978'},
        {id: 2, title: 'John Wick', release_date: '2014'},
        {id: 3, title: 'Jurasic Park', release_date: '1998'},
        {id: 4, title: 'Wonder', release_date: '2016'}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
    <div className = 'home'>

        <form onSubmit = {handleSearch} className = 'search-form'>
            <input
            type = 'text'
            placeholder = 'Search for movies...'
            className = 'search-input'
            value = {searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
            />
            <button type = 'submit' className = 'search-button'> Search </button>
        </form>

        <div className = 'movies-grid'>
            {movies.map((movie) => (
                <MovieCard movie = {movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home