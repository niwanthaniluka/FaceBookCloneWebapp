import React from "react";
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponserd">Sponserd</span>
          <img src="/Images/add.jpeg" alt="" className="addImge" />
          <span className="AddText">
            Need a comfortable ride at any time? Our professional drivers are
            available 24/7 for quick pickups! Enjoy safe, clean, and affordable
            rides—just call or WhatsApp...!
          </span>
        </div>
        <div className="brithdayContainer">
          <img src="/images/Birthday.png" alt="" className="brithdayImge" />
          <span className="birthdayText">
            <b>Elizabeth Taylor</b> and <b>5 others</b> having birthday today..!
          </span>
        </div>
        <div className="frienList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/Images/O1.jpeg" alt="" className="onlineFrinedImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFrindName">Ben Williams</span>
          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/Images/O2.jpeg" alt="" className="onlineFrinedImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFrindName">Olivia Davis</span>
          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/Images/O3.jpeg" alt="" className="onlineFrinedImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFrindName">Elizabeth Taylor</span>
          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/Images/O4.jpeg" alt="" className="onlineFrinedImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFrindName">chathura sadaruwan</span>
          </li>
        </div>
      </div>
    </div>
  );
}
