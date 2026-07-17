import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

function DepartmentList() {

    const [departments, setDepartments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadDepartments();
    }, []);

    const loadDepartments = () => {
        DepartmentService.getAllDepartments()
            .then((response) => {
                console.log(response.data);
                setDepartments(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deleteDepartment = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this department?"
        );

        if (!confirmDelete) {
            return;
        }

        DepartmentService.deleteDepartment(id)
            .then(() => {

                loadDepartments();

            })
            .catch((error) => {

                console.error(error);

            });

    };

    return (
        <div className="container mt-4 text-center" >

            <h2 className="text-center mb-4">
                Department List
            </h2>

            
                <button
                    className="btn btn-primary me-2 mb-4"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
                <button
                    className="btn btn-success mb-4"
                    onClick={() => navigate("/add-department")}
                >
                    Add Department
                </button>
            

            <table className="table table-bordered table-striped text-center align-middle">

                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Department Name</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {departments.map((department) => (
                        <tr key={department.departmentId}>
                            <td>{department.departmentId}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.location}</td>

                            <td className="text-center">

                                <button
                                    className="btn btn-warning btn-sm mx-1"
                                    onClick={() =>
                                        navigate(`/update-department/${department.departmentId}`)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm mx-1"
                                    onClick={() => deleteDepartment(department.departmentId)}
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

export default DepartmentList;