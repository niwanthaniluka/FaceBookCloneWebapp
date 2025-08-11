import React from "react";
import "./leftPane.css";
import MessageIcon from "@mui/icons-material/Message";
import PanoramaFishEyeSharpIcon from "@mui/icons-material/PanoramaFishEyeSharp";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import FeedbackSharpIcon from "@mui/icons-material/FeedbackSharp";
import ChecklistRtlSharpIcon from "@mui/icons-material/ChecklistRtlSharp";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";
import CompostSharpIcon from "@mui/icons-material/CompostSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import VolunteerActivismSharpIcon from "@mui/icons-material/VolunteerActivismSharp";
import SportsEsportsSharpIcon from "@mui/icons-material/SportsEsportsSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import PaymentSharpIcon from "@mui/icons-material/PaymentSharp";
import FlagSharpIcon from "@mui/icons-material/FlagSharp";
import RecentActorsSharpIcon from "@mui/icons-material/RecentActorsSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <PanoramaFishEyeSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Meta AI</span>
          </li>

          <li className="leftPaneMenuItem">
            <HistorySharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Memories</span>
          </li>

          <li className="leftPaneMenuItem">
            <BookmarkSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Saved</span>
          </li>

          <li className="leftPaneMenuItem">
            <GroupsSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Groups</span>
          </li>

          <li className="leftPaneMenuItem">
            <OndemandVideoSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Video</span>
          </li>

          <li className="leftPaneMenuItem">
            <StoreSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Marketplace</span>
          </li>

          <li className="leftPaneMenuItem">
            <FeedbackSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Feeds</span>
          </li>

          <li className="leftPaneMenuItem">
            <ChecklistRtlSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Ads Manager</span>
          </li>

          <li className="leftPaneMenuItem">
            <CakeSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Birthdays</span>
          </li>

          <li className="leftPaneMenuItem">
            <CompostSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Climate Science Centre</span>
          </li>

          <li className="leftPaneMenuItem">
            <EventAvailableSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Events</span>
          </li>

          <li className="leftPaneMenuItem">
            <VolunteerActivismSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Fundraisers</span>
          </li>

          <li className="leftPaneMenuItem">
            <SportsEsportsSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Gaming video</span>
          </li>

          <li className="leftPaneMenuItem">
            <MessageSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Messenger</span>
          </li>

          <li className="leftPaneMenuItem">
            <PaymentSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Orders and payments</span>
          </li>

          <li className="leftPaneMenuItem">
            <FlagSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Pages</span>
          </li>

          <li className="leftPaneMenuItem">
            <RecentActorsSharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Recent ad activity</span>
          </li>

          <li className="leftPaneMenuItem">
            <VideoLibrarySharpIcon className="leftPaneMenuicon" />
            <span className="leftPaneMenuText">Reels</span>
          </li>

          <hr />
          <div className="pagesYouLiked">
            <h3>Pages you Liked</h3>
          </div>

          <div className="pageList">
            <li className="pagesListItem">
              <img src="/Images/code.jpeg" alt="" className="pagePic" />
              <span className="pageName">Code with Niwantha</span>
            </li>

            <li className="pagesListItem">
              <img src="/Images/profile/profile4.jpg" alt="" className="pagePic" />
              <span className="pageName">Auto Garage</span>
            </li>

            <li className="pagesListItem">
              <img src="/Images/react.jpeg" alt="" className="pagePic" />
              <span className="pageName">React Js Framework</span>
            </li>

            <li className="pagesListItem">
              <img src="/Images/photo.jpeg" alt="" className="pagePic" />
              <span className="pageName">Wild Photograpy</span>
            </li>

            <li className="pagesListItem">
              <img src="/Images/Netflix.jpeg" alt="" className="pagePic" />
              <span className="pageName">Netflix</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
