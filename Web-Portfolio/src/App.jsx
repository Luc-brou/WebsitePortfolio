import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutPage';
import Languages from './components/LanguagesPage';
import Header from './components/Header';

function App() {
  try {
    return (
      <div className="bg-primary text-white p-4">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<About />} />
          <Route path="/languages" element={<Languages />} />
        </Routes>
      </div>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    return <h1>Error Rendering App. Check The Console.</h1>;
  }
}

export default App;
