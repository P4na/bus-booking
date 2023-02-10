import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BasePage } from './pages/BasePage';
import { Search } from './pages/Search';
import { DetailPage } from './pages/DetailPage';
import { SuccessPage } from './pages/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasePage/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/search/:el1/:el2/:eldate' element={<Search />} />
          <Route path='/ticket/:id' element={<DetailPage/>} />
          <Route path='/success/:email/:route' element={<SuccessPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
