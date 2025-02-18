import MoviesHeader from './MoviesHeader';
import MovieBox from './MovieBox';

function Movies() {

    return (
        <div className="movies">

            <MoviesHeader />

            <h1 className="movies__text">click the movie poster for info and where to watch</h1>

            <MovieBox></MovieBox>

            <a className='movies__link' href="/">restart</a>

        </div>
    )

}

export default Movies