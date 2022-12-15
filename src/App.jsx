import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./screens/Home";
import MediaDetails from "./screens/MediaDetails";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie">
            <Route path=":id" element={<MediaDetails />} />
          </Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
