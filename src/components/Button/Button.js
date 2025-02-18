import { useSelector, useDispatch } from 'react-redux';
import { PickMovies, CloseModal } from "../../store/actions/moviesActions";


function Button() {
    const selectedFilters = useSelector(state => state.filters.selected);
    const modalMessage = useSelector(state => state.movies.modalMessage);
    const showModal = useSelector(state => state.movies.showModal);
    const loading = useSelector(state => state.movies.loading);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(PickMovies(selectedFilters));
    };

    return (
        <div>
            <button className="button" onClick={handleClick} disabled={loading}>
                {loading ? <span>Finding movies... <img className="button__spinner" src="/spinner.svg" alt="" /></span> : "Pick a Movie"}
            </button>

            {showModal && (
                <div className="modal" onClick={() => dispatch(CloseModal())}>
                    <div className="modal__content">
                        <span className="modal__content__close">×</span>
                        <p className='modal__content__text'>{modalMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Button;