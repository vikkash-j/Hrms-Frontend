import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

function UpdateDepartment() {

    const [departmentName, setDepartmentName] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {

        DepartmentService.getDepartmentById(id)
            .then((response) => {

                setDepartmentName(response.data.departmentName);
                setLocation(response.data.location);

            })
            .catch((error) => {

                console.error(error);

            });

    }, [id]);

    const updateDepartment = () => {

        const department = {
            departmentName,
            location
        };

        DepartmentService.updateDepartment(id, department)
            .then(() => {

                navigate("/departments");

            })
            .catch((error) => {

                console.error(error);

            });

    };

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-header bg-warning">
                    <h3>Update Department</h3>
                </div>

                <div className="card-body">

                    <div className="mb-3">

                        <label className="form-label">
                            Department Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={departmentName}
                            onChange={(e) =>
                                setDepartmentName(e.target.value)
                            }
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Location
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)
                            }
                        />

                    </div>

                    <button
                        className="btn btn-warning"
                        onClick={updateDepartment}
                    >
                        Update
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

export default UpdateDepartment;