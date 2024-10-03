import { Link } from "react-router-dom";
import holiday from "../../pages/app/assets/img/icons/holiday-calendar.svg";
export const Holiday = () => {
  return (
    <>
      <div className="card info-card flex-fill">
        <div className="card-body">
          <h4>Upcoming Holidays</h4>
          <div className="holiday-details">
            <div className="holiday-calendar">
              <div className="holiday-calendar-icon">
                <img
                  src={holiday}
                  alt="Icon"
                />
              </div>
              <div className="holiday-calendar-content">
                <h6>Ramzan</h6>
                <p>Mon 20 May 2024</p>
              </div>
            </div>
            <div className="holiday-btn">
              <Link
                to="/zarud-admin/dashboard"
                className="btn">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
