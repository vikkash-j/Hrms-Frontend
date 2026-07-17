import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

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

export default new EmployeeService();