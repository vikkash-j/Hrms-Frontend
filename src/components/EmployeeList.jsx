import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deleteEmployee = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        EmployeeService.deleteEmployee(id)
            .then(() => {

                loadEmployees();

            })
            .catch((error) => {

                console.error(error);

            });

    };

    return (
        <div className="container mt-4 text-center" >

            <h2 className="text-center mb-4">
                Employee List
            </h2>

            
                <button
                    className="btn btn-primary me-2 mb-4"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
                <button
                    className="btn btn-success mb-4"
                    onClick={() => navigate("/add-employee")}
                >
                    Add Employee
                </button>
            

            <table className="table table-bordered table-striped text-center align-middle">

                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Department ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.employeeName}</td>
                            <td>{employee.departmentId}</td>

                            <td className="text-center">

                                <button
                                    className="btn btn-warning btn-sm mx-1"
                                    onClick={() =>
                                        navigate(`/update-employee/${employee.employeeId}`)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm mx-1"
                                    onClick={() => deleteEmployee(employee.employeeId)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default EmployeeList;