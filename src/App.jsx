import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
