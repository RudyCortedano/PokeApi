import { Route, Routes } from "react-router-dom";
import "./styles/styleGeneral.css";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokedexIDPages from "./pages/PokedexIDPages";
import {  useSelector } from "react-redux";

import './styles/styleDay.css'
import './styles/styleNigth.css'
import PokemonsFound from "./pages/PokemonsFound";
import RouteFail from "./pages/RouteFail";
import HasError from "./components/PokedexPage/HasError";

function App() {
  
  const checked = useSelector(store => store.checkedSlice)

  return (
    <>
      <div className={checked ? "App__nigth" : "App__day"}>
      <Routes>
        <Route path="/" element={<HomePage   />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:id" element={<PokedexIDPages   />} />
          <Route path="/pokemonFound" element={<PokemonsFound   />} />
          <Route path="/error" element={<HasError />} />
        </Route>
          <Route path="*" element={<RouteFail />} />
      </Routes>
        </div>
    </>
  );
}

export default App;
