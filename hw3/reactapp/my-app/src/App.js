import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import Houses from "./components/Houses";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Header />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path = "/search" element={<Search />} />
      <Route path = "/houses" element={<Houses />} />
      <Route path = "*" element={<NotFound />} />
    </Routes>
    </>

  );
}

export default App;
