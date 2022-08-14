import React from "react";
import { useNavigate } from "react-router-dom";

function CourseComponent(props) {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses.</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Welcome to Instructor's Course Page</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div>
          <h1>Welcome to Student's Course Page</h1>
        </div>
      )}
    </div>
  );
}

export default CourseComponent;
