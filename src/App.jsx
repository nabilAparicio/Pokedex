import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
