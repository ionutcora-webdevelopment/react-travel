import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city-breaks' element={<CityBreaks />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/destinations' element={<Destinations />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
