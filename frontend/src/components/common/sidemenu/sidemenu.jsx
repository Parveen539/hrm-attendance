import { useState } from "react";
import { sideMenu } from "./sidedata";

// eslint-disable-next-line react/prop-types
const Sidemenu = ({ handleMouseEnter, handleMouseLeave }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log(index);
  };

  return (
    <>
      <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="sidebar-inner slimscroll">
          {sideMenu.map((value, index) => {
            return (
              <div
                key={index}
                id="sidebar-menu"
                className="sidebar-menu">
                <ul className="sidebar-vertical">
                  <li className="menu-title">
                    <span>{value.title}</span>
                  </li>
                  {value.menu.map((data, ind) => {
                    return (
                      <li
                        className="submenu"
                        key={ind}>
                        <div
                          className={`sidemenu_items ${
                            activeIndex === data.id ? " noti-dot" : ""
                          }`}
                          onClick={() => handleMenuClick(data.id)}>
                          <i className="la la-dashboard"></i>{" "}
                          <span> {data.title}</span>
                          <span className="menu-arrow"></span>
                        </div>
                        {activeIndex == data.id ? (
                          <ul>
                            {data.subMenu.map((v, i) => {
                              return (
                                <li key={i}>
                                  <a href="/">{v.title}</a>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <></>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
