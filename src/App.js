import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* App.js */}
        <NavBar />
        <Routes>
          <Route path='/' element={<NavBar />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;