import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container mx-auto px-4 py-8 max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <TodoForm />
            <TodoFilters />
            <TodoItems />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;