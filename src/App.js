import './App.css';
import { Routes, Route } from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='projectDetails/:projectId' element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
