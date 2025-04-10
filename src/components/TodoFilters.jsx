import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from '../store/slices/todoSlice';

function TodoFilters() {
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-2 my-4">
      {filterOptions.map(option => (
        <button
          key={option.value}
          onClick={() => dispatch(setFilter(option.value))}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentFilter === option.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;