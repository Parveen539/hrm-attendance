import { useState } from "react";

export const Important = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="card flex-fill">
        <div className="card-body">
          <div className="statistic-header">
            <h4>Important</h4>
            <div className="important-notification">
              <a
                href="/import { Header } from './../common/header/header';
">
                View All <i className="fe fe-arrow-right-circle"></i>
              </a>
            </div>
          </div>
          <div className="notification-tab">
            <ul className="nav nav-tabs">
              <li>
                <a
                  href="/"
                  className={tab == 1 ? "active" : ""}
                  data-bs-toggle="tab"
                  data-bs-target="#notification_tab"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}>
                  <i className="la la-bell"></i> Notifications
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={tab == 2 ? "active" : ""}
                  data-bs-toggle="tab"
                  data-bs-target="#schedule_tab"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}>
                  <i className="la la-list-alt"></i> Schedules
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className={`tab-pane ${tab == 1 ? "active" : "fade"} `}
                id="notification_tab">
                <div className="employee-noti-content">
                  <ul className="employee-notification-list">
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-danger rounded-circle">
                            HR
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Your leave request has been</a>
                        </h6>
                        <ul className="nav">
                          <li>02:10 PM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-info rounded-circle">
                            ER
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">You’re enrolled in upcom....</a>
                        </h6>
                        <ul className="nav">
                          <li>12:40 PM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-warning rounded-circle">
                            SM
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Your annual compliance trai</a>
                        </h6>
                        <ul className="nav">
                          <li>11:00 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="rounded-circle">
                            <img
                              src="assets/img/avatar/avatar-1.jpg"
                              className="img-fluid rounded-circle"
                              alt="User"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Jessica has requested feedba</a>
                        </h6>
                        <ul className="nav">
                          <li>10:30 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-warning rounded-circle">
                            DT
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Gentle remainder about train</a>
                        </h6>
                        <ul className="nav">
                          <li>09:00 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-danger rounded-circle">
                            AU
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Our HR system will be down</a>
                        </h6>
                        <ul className="nav">
                          <li>11:50 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`tab-pane ${tab == 2 ? "active" : "fade"} `}
                id="schedule_tab">
                <div className="employee-noti-content">
                  <ul className="employee-notification-list">
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="rounded-circle">
                            <img
                              src="assets/img/avatar/avatar-2.jpg"
                              className="img-fluid rounded-circle"
                              alt="User"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">John has requested feedba</a>
                        </h6>
                        <ul className="nav">
                          <li>10:30 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-danger rounded-circle">
                            HR
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Your leave request has been</a>
                        </h6>
                        <ul className="nav">
                          <li>02:10 PM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-info rounded-circle">
                            ER
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">You’re enrolled in upcom....</a>
                        </h6>
                        <ul className="nav">
                          <li>12:40 PM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-warning rounded-circle">
                            SM
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Your annual compliance trai</a>
                        </h6>
                        <ul className="nav">
                          <li>11:00 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-warning rounded-circle">
                            DT
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Gentle remainder about train</a>
                        </h6>
                        <ul className="nav">
                          <li>09:00 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                    <li className="employee-notification-grid">
                      <div className="employee-notification-icon">
                        <a href="/">
                          <span className="badge-soft-danger rounded-circle">
                            AU
                          </span>
                        </a>
                      </div>
                      <div className="employee-notification-content">
                        <h6>
                          <a href="/">Our HR system will be down</a>
                        </h6>
                        <ul className="nav">
                          <li>11:50 AM</li>
                          <li>21 Apr 2024</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
