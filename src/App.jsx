import { Route, Routes } from "react-router-dom";
import "./styles/styleGeneral.css";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokedexIDPages from "./pages/PokedexIDPages";
import { useDispatch, useSelector } from "react-redux";
import { setCheckedSlice } from "./store/slices/check.slice";

function App() {
  const checked = useSelector(store => store.checkedSlice)
  // const [check, setCheck] = useState(checked)
  // console.log(checked)

  const dispatch = useDispatch()

  const handleMode = () =>{
    dispatch(setCheckedSlice(!checked))
  }
  return (
    <>
    <div className={checked ? "App__nigth" : "App__day"}>
      {/* <button onClick={handleMode}>check</button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:id" element={<PokedexIDPages />} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
