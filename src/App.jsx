import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import CharacterDetailContainer from "./components/CharacterDetailContainer/CharacterDetailContainer";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route
              path="/character/:id"
              element={<CharacterDetailContainer />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
