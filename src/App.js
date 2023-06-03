import React from 'react';

import {useEffect,useState} from 'react';

import MovieCard from './MovieCard';

import './App.css';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ff3f336d';

const App = () => {

    const [movies, setMovies]=useState([]);

    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies = async (title) => {
         const response =await fetch(`${API_URL}&s=${title}`);
         const data=await response.json();

         setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies("Superman");
    }, [])
    return (
        <div className="app"> 
            <h1>MovieName</h1>
            <div className="search">
            <input
                placeholder="Search for movies"
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
                src="https://tse3.mm.bing.net/th?id=OIP.artsGkcWwb_UgjGqyw0shwHaHa&pid=Api&P=0&h=180"
                alt ="search"
                onClick={() =>searchMovies(searchTerm)}
            />
            </div>

            {
                movies.length > 0
                 ?(
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie1={movie}/>
                        ))}
                    </div>
                  ):(
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                 )
            }
            
        </div>
    );
}

export default App;



