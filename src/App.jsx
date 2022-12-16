import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./screens/Home";
import MediaDetails from "./screens/MediaDetails";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/movie/:id" element={<MediaDetails />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
