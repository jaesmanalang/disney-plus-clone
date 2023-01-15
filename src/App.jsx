import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './screens/Home';
import MediaDetails from './screens/MediaDetails';
import Search from './screens/Search';
import Movies from './screens/Movies';
import TvShows from './screens/TvShows';
import NotFound from './screens/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route exact path="/movie/shows" element={<Movies />} />
          <Route exact path="/movie/shows/:id" element={<MediaDetails />} />
          <Route exact path="/tv/shows" element={<TvShows />} />
          <Route
            exact
            path="/tv/shows/:id"
            element={<MediaDetails mediaType="tv" />}
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
