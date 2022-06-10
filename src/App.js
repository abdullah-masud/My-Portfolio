import './App.css';
import { Routes, Route } from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
