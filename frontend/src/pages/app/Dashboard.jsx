import { useState } from "react";
import { Header } from "../../components/common/header";
import { Alert } from "../../components/alert/alert";
import { Employee } from "../../components/cards/employee";
import { Statics } from "../../components/cards/statics";
import { Holiday } from "../../components/cards/holiday";
import { Attendence } from "../../components/cards/attendence";

export const Dashboard = () => {
  const [minisidebar, setMinisidebar] = useState(false);

  let showMinibar = () => {
    setMinisidebar(!minisidebar);
  };

  return (
    <div>
      <div className="main-wrapper">
        <Header show={showMinibar} />
        <div className="page-wrapper">
          <div className="content container-fluid pb-0">
            <div className="row">
              <div className="col-md-12">
                <Alert />
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-8 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <Employee />
                    <Statics />
                    <Holiday />
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <Attendence />
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="statistic-header">
                          <h4>Working hours</h4>
                          <div className="dropdown statistic-dropdown">
                            <a
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="/">
                              This Week
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                href="/"
                                className="dropdown-item">
                                Last Week
                              </a>
                              <a
                                href="/"
                                className="dropdown-item">
                                This Month
                              </a>
                              <a
                                href="/"
                                className="dropdown-item">
                                Last 30 Days
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="working-hour-info">
                          <div id="working_chart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
