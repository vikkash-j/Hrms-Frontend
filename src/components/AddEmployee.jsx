import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {

    const [employeeName, setEmployeeName] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const navigate = useNavigate();

    const saveEmployee = () => {

        if (employeeName.trim() === "" || departmentId.trim() === "") {
            alert("Employee Name and Department ID are required.");
            return;
        }
        

        const employee = {
            employeeName,
            departmentId
        };

        EmployeeService.createEmployee(employee)
            .then((response) => {
                console.log(response.data);
                navigate("/employees");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-header bg-primary text-white">
                    <h3>Add Employee</h3>
                </div>

                <div className="card-body">

                    <div className="mb-3">

                        <label className="form-label">
                            Employee Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Employee Name"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Department ID
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Department ID"
                            value={departmentId}
                            onChange={(e) => setDepartmentId(e.target.value)}
                        />

                    </div>

                    <button
                        className="btn btn-success"
                        onClick={saveEmployee}
                    >
                        Save
                    </button>

                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate("/employees")}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary me-2 ms-2"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddEmployee;