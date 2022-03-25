import React from "react";
import Typical from "react-typical";
import './Profile.css'
import ScrollService from "../../../Utilities/scrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/narayan.kant.39">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.facebook.com/narayan.kant.39">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/navneetkj0508/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCq6vguzHegrPcVqvO3SddeA">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <sapn className="highlighted-text">Narayan Kumar Jha</sapn>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ⛔️",
                    2000,
                    "Frontend Dev 💻",
                    2000,
                    "MERN Stack Dev 😎",
                    2000,
                    "ReactJS Dev 📲",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary"
            onClick={() => ScrollService.scrollHandler.scollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="NARAYAN.pdf" download="Narayan Narayan.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
