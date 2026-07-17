import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {

    const [employeeName, setEmployeeName] = useState("");
    const [departmentId, setDepartmentId] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {

        EmployeeService.getEmployeeById(id)
            .then((response) => {

                setEmployeeName(response.data.employeeName);
                setDepartmentId(response.data.departmentId);

            })
            .catch((error) => {

                console.error(error);

            });

    }, [id]);

    const updateEmployee = () => {

        const employee = {
            employeeName,
            departmentId
        };

        EmployeeService.updateEmployee(id, employee)
            .then(() => {

                navigate("/employees");

            })
            .catch((error) => {

                console.error(error);

            });

    };

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-header bg-warning">
                    <h3>Update Employee</h3>
                </div>

                <div className="card-body">

                    <div className="mb-3">

                        <label className="form-label">
                            Employee Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={employeeName}
                            onChange={(e) =>
                                setEmployeeName(e.target.value)
                            }
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Department ID
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={departmentId}
                            onChange={(e) =>
                                setDepartmentId(e.target.value)
                            }
                        />

                    </div>

                    <button
                        className="btn btn-warning"
                        onClick={updateEmployee}
                    >
                        Update
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

export default UpdateEmployee;  