import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export const Attendence = () => {
  return (
    <>
      <div className="card flex-fill">
        <div className="card-body">
          <div className="statistic-header">
            <h4>Attendance & Leaves</h4>

            <div className="dropdown statistic-dropdown">
              <a
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                2024
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    href="#">
                    2025
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#">
                    2026
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#">
                    2027
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="attendance-list">
            <div className="row">
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-primary">9</h4>
                  <p>Total Leaves</p>
                </div>
              </div>
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-pink">5.5</h4>
                  <p>Leaves Taken</p>
                </div>
              </div>
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-success">04</h4>
                  <p>Leaves Absent</p>
                </div>
              </div>
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-purple">0</h4>
                  <p>Pending Approval</p>
                </div>
              </div>
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-info">214</h4>
                  <p>Working Days</p>
                </div>
              </div>
              <div className="col-md-4 col-4">
                <div className="attendance-details">
                  <h4 className="text-danger">2</h4>
                  <p>Loss of Pay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="view-attendance">
            <a href="/">
              Apply Leave <i className="fe fe-arrow-right-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
