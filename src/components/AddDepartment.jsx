import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

function AddDepartment() {

    const [departmentName, setDepartmentName] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const saveDepartment = () => {

        if (departmentName.trim() === "" || location.trim() === "") {
            alert("Department Name and Location are required.");
            return;
        }
        

        const department = {
            departmentName,
            location
        };

        DepartmentService.createDepartment(department)
            .then((response) => {
                console.log(response.data);
                navigate("/departments");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-header bg-primary text-white">
                    <h3>Add Department</h3>
                </div>

                <div className="card-body">

                    <div className="mb-3">

                        <label className="form-label">
                            Department Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Department Name"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Location
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />

                    </div>

                    <button
                        className="btn btn-success"
                        onClick={saveDepartment}
                    >
                        Save
                    </button>

                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate("/departments")}
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

export default AddDepartment;