import React from "react";
import { ArrowLeft } from "lucide-react";
import "./ProfileScreenStyles.tsx";
const ProfileScreen = () => {
  return (
    <div className="container">
      <div className="profile-card">
        <button className="back-button">
          <ArrowLeft className="icon" />
        </button>
        <div className="profile-info">
          <img src="/avatar.png" alt="Profile" className="avatar" />
          <div className="info-card">
            <p className="name">Name</p>
            <p className="email">name@gmail.com</p>
            <a href="#" className="edit-link">Edit</a>
          </div>
        </div>
        <div className="menu">
          <button className="menu-button">Help</button>
          <button className="menu-button">Support</button>
        </div>
        <div className="signout-container">
          <button className="signout-button">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
