import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "../NotificationItem/NotificationItem";
import PropTypes from "prop-types";
// import closeIcon from "./close-icon.png";

const Notification = ({ displayDrawer = false }) => {
  function buttonClicked() {
    console.log("Close button has been clicked");
  }
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem
              type="default"
              html={{ __html: "New course available" }}
              value=""
            />
            <NotificationItem
              type="urgent"
              html={{ __html: "New resume available" }}
              value=""
            />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
              value=""
            />
          </ul>
          <button
            style={{ align: "right", ariaLabel: "Close" }}
            onClick={buttonClicked}
            className="Notifications-close-button"
          >
            {/* <img src={closeIcon} alt="close icon"/> */}X
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
Notification.prototype = {
  displayDrawer: PropTypes.bool,
};
export default Notification;
