
"use client";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectActiveFilter } from '../../selectors/selectors';
import { SearchFilter } from "../../store/actions/filterActions";

function FilterItems() {
    const activeFilter = useSelector(selectActiveFilter);

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

    return (
        <div className="filters__box__items">

            <input type="text" className="filters__box__items__search"  value={searchQuery} onChange={handleSearchChange}  />

            {
                (activeFilter.filtered.length < 1 && activeFilter.all !== null && searchQuery.length < 1) ?
                <ul className='filters__box__items__list'>
                    {activeFilter.all.map((item, index) => (
                        <li className='filters__box__items__list__item' key={index}>{item.name}</li>
                    ))}
                </ul>
                :<ul className='filters__box__items__list'>
                    {activeFilter.filtered.map((item, index) => (
                        <li className='filters__box__items__list__item' key={index}>{item.name}</li>
                    ))}
                </ul>
            }

        </div>
    )

}

export default FilterItems