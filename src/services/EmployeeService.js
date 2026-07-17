import axios from "axios";

const BASE_URL = "https://hrms-backend-pfoy.onrender.com/employee";

class EmployeeService {

    getAllEmployees() {
        return axios.get(`${BASE_URL}/getallemployee`);
    }

    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/getemployee/${id}`);
    }

    createEmployee(employee) {
        return axios.post(`${BASE_URL}/createdemployee`, employee);
    }

    updateEmployee(id, employee) {
        return axios.put(`${BASE_URL}/updateemployee/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(`${BASE_URL}/deleteemployee/${id}`);
    }
}

const employeeService = new EmployeeService();

export default employeeService;