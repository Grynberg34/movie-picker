import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectActiveFilter } from '../../selectors/selectors';
import { SearchFilter, AddToSelected } from "../../store/actions/filterActions";

function FiltersItems() {
    const activeFilter = useSelector(selectActiveFilter);

    const selectedFilters = useSelector(state => state.filters.selected);

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        dispatch(SearchFilter(activeFilter, value));
    };

    useEffect(() => {
        setSearchQuery('');
    }, [activeFilter.id]);

    const handleItemClick = (item) => {

        if (selectedFilters.some(selected => selected.name === item.name)) {
            return;
        }
    
        if (activeFilter.id === 3 && selectedFilters.some(selected => selected.filterId === 3)) {
            return;
        }
    
        dispatch(AddToSelected(item, activeFilter.id));
    };

    return (
        <div className="filters__box__items">

            <input type="text" className="filters__box__items__search" placeholder='search'  value={searchQuery} onChange={handleSearchChange}  />

            {
                (activeFilter.filtered.length < 1 && activeFilter.all !== null && searchQuery.length < 1) ?
                <ul className='filters__box__items__list'>
                    {activeFilter.all.map((item, index) => (
                        <li onClick={() => handleItemClick(item)} className='filters__box__items__list__item' key={index}>{item.name}</li>
                    ))}
                </ul>
                :<ul className='filters__box__items__list'>
                    {activeFilter.filtered.map((item, index) => (
                        <li onClick={() => handleItemClick(item)} className='filters__box__items__list__item' key={index}>{item.name}</li>
                    ))}
                </ul>
            }

        </div>
    )

}

export default FiltersItems