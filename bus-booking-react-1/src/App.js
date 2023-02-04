import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Dashboard/></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
