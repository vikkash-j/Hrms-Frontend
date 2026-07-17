import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5 text-center">

            <h1 className="mb-5">HRMS Dashboard</h1>

            <button
                className="btn btn-primary btn-lg me-3"
                onClick={() => navigate("/departments")}
            >
                Departments
            </button>

            <button
                className="btn btn-success btn-lg"
                onClick={() => navigate("/employees")}
            >
                Employees
            </button>

        </div>

    );

}

export default Home;