import FiltersBox from './FiltersBox';
import FiltersSelected from './FiltersSelected';


function Filters() {

    return (
        <div className="filters">

            <FiltersSelected></FiltersSelected>

            <FiltersBox></FiltersBox>

        </div>
    )

}

export default Filters