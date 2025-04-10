import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, selectTodos } from '../store/slices/todoSlice';

function TodoItems() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center my-4">No tasks to display</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow transition-all hover:shadow-md"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5 mr-3 cursor-pointer accent-blue-600"
            />
            <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none transition-colors"
            aria-label="Delete todo"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;