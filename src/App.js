import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Villes from './pages/Villes';
import Zones from './pages/Zones';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddVille from './villes/AddVille';
import EditVille from './villes/EditVille';
import Serie from './pages/Serie';
import EditSerie from './pages/series/EditSerie';
import AddSerie from './pages/series/AddSerie';
import Specialite from './pages/Specialite';
import EditSpecialite from './pages/specialite/EditSpecialite';
import AddSpecialite from './pages/specialite/AddSpecialite';
import Restaurant from './pages/Restaurant';





function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/villes" element={<Villes />}/>
          <Route exact path="/addVille" element={<AddVille />}/>
          <Route exact path="/addSerie" element={<AddSerie />}/>
          <Route exact path="/editserie/:id" element={<EditSerie/>}/>
          <Route exact path="/editville/:id" element={<EditVille />}/>
          <Route exact path="/serie" element={<Serie/>}/>
          <Route exact path="/specialite" element={<Specialite/>}/>
          <Route exact path="/editspecialite/:id" element={<EditSpecialite />}/>
          <Route exact path="/addSpecialite" element={<AddSpecialite />}/>
          <Route exact path="/restaurant" element={<Restaurant/>}/>
        </Routes>
        
        
      </Router>



    </div>
  );
}

export default App;
