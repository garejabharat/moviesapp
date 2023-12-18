import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MoviesParent from './pages/MoviesParent';
import Alternative_Title from './components/comman/Alternative_Title';
import Cast_Crew from './components/comman/Cast_Crew';
import HeaderPageRough from './routes/HeaderPageRough';
import PageTitle_Header from './components/comman/PageTitle_Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesParent />} />
          <Route path='/:movieId' element={<HeaderPageRough />}>
            <Route index element={<MovieDetails />} />
            <Route element={<PageTitle_Header />}>
              <Route path='title' element={<Alternative_Title />} />
              <Route path='cast' element={<Cast_Crew />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
