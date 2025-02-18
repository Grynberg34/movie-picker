import { useSelector, useDispatch } from 'react-redux';
import { DeleteFromSelected } from "../../store/actions/filterActions";
import CloseIcon from '@mui/icons-material/Close';

function FilterSelected() {

    const selectedFilters = useSelector(state => state.filters.selected);
    const dispatch = useDispatch();

    const handleDelete = (name) => {
        dispatch(DeleteFromSelected(name));
    };

    return (
        <div className="filters__selected">
            {selectedFilters.length > 0 ? (
                <ul className='filters__selected__list'>
                    {selectedFilters.map((item, index) => (
                        <li className='filters__selected__list__item' key={index}>
                            {item.name} 
                            <CloseIcon 
                                className='filters__selected__list__item__icon' 
                                onClick={() => handleDelete(item.name)}
                            />
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default FilterSelected;