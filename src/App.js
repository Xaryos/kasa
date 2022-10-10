import '@/App.css';
import Home from '@/pages/Home';
import Logement from '@/pages/Logement';
import Apropos from './pages/A-propos';
import Error from '@/_utils/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/logement" element={<Logement />} /> 
          <Route path="/apropos" element={<Apropos />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
