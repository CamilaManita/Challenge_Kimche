import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterContainer from "./components/CharacterContainer/CharacterContainer";
import CharacterDetailContainer from "./components/CharacterDetailContainer/CharacterDetailContainer";
import Error from "./components/Error/Error";
import SearchPage from "./components/SearchPage/SearchPage";
import FilterPage from "./components/FilterPage/FilterPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchPage/>
        <FilterPage/>
        <Routes>
          <Route path="/" element={<CharacterContainer />} />
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
