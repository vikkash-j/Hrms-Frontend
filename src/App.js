import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import DepartmentList from './components/DepartmentList';
import AddDepartment from './components/AddDepartment';
import UpdateDepartment from './components/UpdateDepartment';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/departments" element={<DepartmentList />} />

        <Route path="/employees" element={<EmployeeList />} />

        <Route path="/add-department" element={<AddDepartment />} />

        <Route path="/add-employee" element={<AddEmployee />} />

        <Route path="/update-department/:id" element={<UpdateDepartment />} />

        <Route path="/update-employee/:id" element={<UpdateEmployee />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;