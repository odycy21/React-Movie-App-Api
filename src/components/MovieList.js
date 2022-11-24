import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const MovieList = ({movies, favouriteComponent, heading, handleFavouritesClick}) => {

    const FavouriteComponent = favouriteComponent;
    return ( 
        <>
        <Container fluid>   

                <Row>
                    <Col>
                        <div className="d-flex justify-content-center mt-5 mb-5">
                            <h1>{heading}</h1>
                        </div>
                    </Col>
                </Row>
        
                <Row>

                    <Col className="d-flex justify-content-evenly flex-wrap m-3">
                        
                    {movies.map((movie, index) => (
                        <div className="image-container d-flex m-3">
                            <img src={movie.Poster} alt='movie' key={index}></img>
                                <div className="overlay d-flex align-items-center justify-content-center m-3" onClick = {() => handleFavouritesClick(movie)} >
                                     <FavouriteComponent />
                                </div>
                        </div>

                    ))}
                                
                    </Col>
                  
                </Row>
            </Container>
        </>
     );
}
 
export default MovieList;