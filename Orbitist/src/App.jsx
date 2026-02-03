import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '@pages/Home';
import MainLayout from './layouts/MainLayout';
import Planet from './pages/planets/Planet';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <MainLayout data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />

        <Route
          path="/:planet"
          element={<Planet theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
