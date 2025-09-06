import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Simple Webpage</h1>
        <p className="text-lg">A React app with a counter and dark mode</p>
      </header>
      <main className="flex flex-col items-center gap-6">
        <div className="text-xl">
          Count: <span className="font-bold">{count}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 dark:bg-red-700 text-white rounded hover:bg-red-600 dark:hover:bg-red-800"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </main>
      <footer className="mt-8 text-sm">
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;