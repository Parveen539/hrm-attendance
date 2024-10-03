/* eslint-disable react/prop-types */
// import logo from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../../pages/app/assets/img/logo.svg";
import notification from "../../pages/app/assets/img/profiles/avatar-02.jpg";
import avatar from "../../pages/app/assets/img/avatar/avatar-27.jpg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link
            to="/zarud-admin/dashboard"
            className="logo">
            <img
              src={logo}
              alt="Logo"
            />
          </Link>
          <Link
            to="/zarud-admin/dashboard"
            className="logo collapse-logo">
            {/* <img
              src="assets/img/collapse-logo.svg"
              alt="Logo"
            /> */}
          </Link>
          <Link
            to="/zarud-admin/dashboard"
            className="logo2">
            <img
              src="assets/img/logo2.png"
              width="40"
              height="40"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="page-title-box">
          <h3>Technologies</h3>
        </div>

        <ul className="nav user-menu">
          <li className="nav-item">
            <div className="top-nav-search">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search here"
                />
                <button
                  className="btn"
                  type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/zarud-admin/dashboard"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown">
              <FontAwesomeIcon icon={faBell} />
              <span className="badge rounded-pill">3</span>
            </Link>
            <div className="dropdown-menu notifications dropdown-menu-end">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link
                  to="/zarud-admin/dashboard"
                  className="clear-noti">
                  Clear All
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={notification}
                            alt="User"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={notification}
                            alt="User"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>
                            added{" "}
                            <span className="noti-title">
                              Domenic Houston
                            </span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={notification}
                            alt="User"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>
                            completed task{" "}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={notification}
                            alt="User"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              href="/"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown">
              <FontAwesomeIcon icon={faComment} />

              <span className="badge rounded-pill">8</span>
            </a>
            <div className="dropdown-menu notifications dropdown-menu-end">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a
                  href="/"
                  className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={notification}
                              alt="User"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={notification}
                              alt="User"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={notification}
                              alt="User"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={notification}
                              alt="User"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={notification}
                              alt="User"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/">View all Messages</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="/"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown">
              <span className="user-img">
                <img
                  src={avatar}
                  alt="User"
                />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a
                className="dropdown-item"
                href="/">
                My Profile
              </a>
              <a
                className="dropdown-item"
                href="/">
                Settings
              </a>
              <a
                className="dropdown-item"
                href="/">
                Logout
              </a>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu">
          <a
            href="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              to="/zarud-admin/dashboard"
              className="dropdown-item"
              href="/">
              My Profile
            </Link>
            <Link
              to="/zarud-admin/dashboard"
              className="dropdown-item">
              Settings
            </Link>
            <Link
              to="/zarud-admin/dashboard"
              className="dropdown-item">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
