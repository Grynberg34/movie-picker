"use client";
import { useState } from 'react';
import FiltersSelection from './FiltersSelection';
import FiltersItems from './FiltersItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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