import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./screens/Home";
import MediaDetails from "./screens/MediaDetails";
import Search from "./screens/Search";
import Movies from "./screens/Movies";
import TvShows from "./screens/TvShows";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route exact path="/movie/:id" element={<MediaDetails />} />
            <Route exact path="/movie/shows" element={<Movies />} />
            <Route exact path="/tv/shows" element={<TvShows />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </AppProvider>
  );
}
