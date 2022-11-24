import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';


function App() {

  const [movies, setMovies] = useState([]);

  const [doneMovies, setDoneMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("Avengers");


  const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2c5edfd2`;
  
  const response = await fetch(url);
  const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }

  }

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue])

  //Parsing movies to get save movie items
  useEffect(() => {
		const movieDoneWatch = JSON.parse(
			localStorage.getItem('movie-app-done-watch')
		);

		if (movieDoneWatch) {
			setDoneMovies(movieDoneWatch);  
		}
	}, []);

  //Stringify movies to save movie items
  const saveToLocalStorage = (items) => {
		localStorage.setItem('movie-app-done-watch', JSON.stringify(items));
	};


  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...doneMovies, movie];
    setDoneMovies(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
}

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = doneMovies.filter(
    (doneMovies) => doneMovies.imdbID !== movie.imdbID
  );
  setDoneMovies(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};

  return (
    <Container fluid>
        <Row>
          <Header searchValue={searchValue} setSearchValue = {setSearchValue} />
        </Row>

        <Row>
          <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent = {AddFavourites} heading = 'Latest Movies'/>
        </Row>

        <Row>
        <MovieList movies={doneMovies} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites} heading = 'Done'/>
        </Row>

        <Row>
          <Footer/>
        </Row>

    </Container>
  );
}

export default App;
