//УСЛОЖНЯЕМ:

import { useDispatch } from 'react-redux';
import { setFilter } from '../features/todoSlice';

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FilterTasks;
