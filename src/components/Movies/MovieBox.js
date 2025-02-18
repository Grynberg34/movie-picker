import { useSelector } from 'react-redux';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import useGeoLocation from "react-ipgeolocation";

function MovieBox() {
    const movies = useSelector(state => state.movies);
    const activeMovie = movies.list[movies.activeIndex];
    const [showOverlay, setShowOverlay] = useState(false);

    const location = useGeoLocation();
    var country = location.country;

    return (
        <div className="movies__movie" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${activeMovie.poster_path})`}} onClick={() => setShowOverlay(!showOverlay)}>
            
            {showOverlay && (
                <div className="movies__movie__overlay">
                    <span className="movies__movie__overlay__close" onClick={() => setShowOverlay(!showOverlay)}>x</span>

                    <div className="movies__movie__overlay__info">
                                
                        <h1 className="movies__movie__overlay__info__title">{activeMovie.original_title}</h1>
                        {
                        activeMovie.original_title !== activeMovie.title?
                        <h2 className="movies__movie__overlay__info__subtitle">{activeMovie.title}</h2>
                        :null
                        }

                        <h3 className="movies__movie__overlay__info__item overview">{activeMovie.overview}</h3>        

                        <h2 className="movies__movie__overlay__info__category">Release Date</h2>
                        <h3 className="movies__movie__overlay__info__item">{activeMovie.release_date.substring(0,4)}</h3>  

                        <h2 className="movies__movie__overlay__info__category">Runtime</h2>
                        <h3 className="movies__movie__overlay__info__item">{activeMovie.runtime}'</h3>

                        <div>
                            <h2 className="movies__movie__overlay__info__category">Directed by</h2>

                            <h3 className="movies__movie__overlay__info__item">{activeMovie.director}</h3>
                            
                        </div>

                        <div>
                            <h2 className="movies__movie__overlay__info__category">Cast</h2>
                            { activeMovie.cast.map( (person, index) =>
                                <h3 key={index} className="movies__movie__overlay__info__item">{person}</h3>
                            )}
                        </div>
                        
                        { activeMovie.providers[country]?.flatrate !== undefined?
                            <div>
                                <h2 className="movies__movie__overlay__info__category">Streaming ({country})</h2>

                                <div className="movies__movie__overlay__info__gallery">

                                    { activeMovie.providers[country].flatrate.map( (provider, index) =>
                                        <img key={index} className="movies__movie__overlay__info__gallery__img" src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                                    )}

                                </div>

                            </div>
                            :null

                        }


                    </div>

                </div>
            )}
        </div>
    );
}

export default MovieBox;