import FiltersSelection from './FiltersSelection';
import FiltersItems from './FiltersItems';

function FilterBox() {

    return (
        <div className="filters__box">

            <FiltersSelection></FiltersSelection>

            <FiltersItems></FiltersItems>

        </div>
    )

}

export default FilterBox