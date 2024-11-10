import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/VideoGallery";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="gallery" element={<Gallery />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}
