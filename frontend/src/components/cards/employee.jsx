import { Link } from "react-router-dom";
import avatar from "../../pages/app/assets/img/avatar/avatar-19.jpg";

export const Employee = () => {
  return (
    <>
      <div className="card employee-welcome-card flex-fill">
        <div className="card-body">
          <div className="welcome-info">
            <div className="welcome-content">
              <h4>Welcome Back, Darlee</h4>
              <p>
                You have <span>4 meetings</span> today,
              </p>
            </div>
            <div className="welcome-img">
              <img
                src={avatar}
                className="img-fluid"
                alt="User"
              />
            </div>
          </div>
          <div className="welcome-btn">
            <Link
              to="/zarud-admin/dashboard"
              className="btn">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
