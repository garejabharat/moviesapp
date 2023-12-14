import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MoviesParent from './pages/MoviesParent';
// import HeaderForDetailsPages from './component/comman/HeaderForDetailsPages';
import Alternative_Title from './components/comman/Alternative_Title';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesParent />} />
          <Route path='/:movieId' element={<MovieDetails />}>
            <Route path='/:movieId/title' element={<Alternative_Title />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

