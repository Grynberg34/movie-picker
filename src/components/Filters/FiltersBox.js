import { useState } from 'react';
import FiltersSelection from './FiltersSelection';
import FiltersItems from './FiltersItems';

function FilterBox() {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div className={`filters__box ${isMinimized ? 'minimized' : 'maximized'}`}>

            <button className="filters__box__toggle" onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? '+' : '-'}
            </button>

            {!isMinimized && (
                <>
                    <FiltersSelection />
                    <FiltersItems />
                </>
            )}

        </div>
    );
}

export default FilterBox;