import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
export const Alert = () => {
  return (
    <>
      <div className="employee-alert-box">
        <div className="alert alert-outline-success alert-dismissible fade show">
          <div className="employee-alert-request">
            <FontAwesomeIcon icon={faCircleQuestion} />
            Your Leave Request on <span>“24th April 2024”</span> has been
            Approved!!!
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </>
  );
};
