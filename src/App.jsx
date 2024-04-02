import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import CharacterDetailContainer from './components/CharacterDetailContainer/CharacterDetailContainer'
import Error from './components/Error/Error'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route
              path="/character/:id"
              element={<CharacterDetailContainer />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
