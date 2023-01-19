import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Components/Layout';
import {Home} from './Components/Home';
import { Create } from './Components/Create';
import {Update} from './Components/Update'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
          
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} /> 
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
