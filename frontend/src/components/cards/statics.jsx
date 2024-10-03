import clock from "../../pages/app/assets/img/icons/clock-in.svg";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
export const Statics = () => {
  return (
    <>
      <div className="card flex-fill">
        <div className="card-body">
          <div className="statistic-header">
            <h4>Statistics</h4>
            <div className="dropdown statistic-dropdown">
              <Link
                to="/"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                id="dropdownMenuLink"
                aria-expanded="false">
                Today
              </Link>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink">
                <Link
                  to="/"
                  className="dropdown-item">
                  Week
                </Link>
                <Link
                  to="/"
                  className="dropdown-item">
                  Month
                </Link>
                <Link
                  to="/"
                  className="dropdown-item">
                  Year
                </Link>
              </div>
            </div>
          </div>
          <div className="clock-in-info">
            <div className="clock-in-content">
              <p>Work Time</p>
              <h4>6 Hrs : 54 Min</h4>
            </div>
            <div className="clock-in-btn">
              <button className="btn btn-primary">
                <img
                  src={clock}
                  alt="Icon"
                />
                Clock-In
              </button>
            </div>
          </div>
          <div className="clock-in-list">
            <ul className="nav">
              <li>
                <p>Remaining</p>
                <h6>2 Hrs 36 Min</h6>
              </li>
              <li>
                <p>Overtime</p>
                <h6>0 Hrs 00 Min</h6>
              </li>
              <li>
                <p>Break</p>
                <h6>1 Hrs 20 Min</h6>
              </li>
            </ul>
          </div>
          <div className="view-attendance">
            <Link to="/zarud-admin/dashboard">
              View Attendance <i className="fe fe-arrow-right-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
