import axios from "axios";

const BASE_URL = "https://hrms-backend-pfoy.onrender.com/department";

class DepartmentService {

    getAllDepartments() {
        return axios.get(`${BASE_URL}/getalldepartment`);
    }

    getDepartmentById(id) {
        return axios.get(`${BASE_URL}/getdepartment/${id}`);
    }

    createDepartment(department) {
        return axios.post(`${BASE_URL}/createdepartment`, department);
    }

    updateDepartment(id, department) {      
        return axios.put(`${BASE_URL}/updatedepartment/${id}`, department);
    }

    deleteDepartment(id) {
        return axios.delete(`${BASE_URL}/deletedepartment/${id}`);
    }
}

const departmentService = new DepartmentService();

export default departmentService;