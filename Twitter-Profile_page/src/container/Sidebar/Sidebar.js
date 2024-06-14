import {
  BookmarkBorderRounded,
  HomeRounded,
  ListAltOutlined,
  MailOutlineRounded,
  MoreHoriz,
  MoreHorizOutlined,
  NotificationsNoneRounded,
  PersonOutlineOutlined,
  TagRounded,
  Twitter,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("Home");

  const navigator = useNavigate();

  const logout = () => {
    localStorage.removeItem('token')
    navigator("/login")
  }

  return (
    <div className="appContainer">
      <div className="sideBar">
        <h1>
          <Twitter className="sidebarIcon" />
        </h1>
        <ul className="sideBarList">
          <li
            className="sideBarListItem"
            onClick={() => setActive("Home")}
            style={{ fontWeight: active === "Home" ? "bolder" : "" }}
          >
            <HomeRounded className="sidebarIcon" />
            Home
          </li>
          <li className="sideBarListItem">
            <TagRounded className="sidebarIcon" />
            Explore
          </li>
          <li className="sideBarListItem">
            <NotificationsNoneRounded className="sidebarIcon" />
            Notifications
          </li>
          <li className="sideBarListItem">
            <MailOutlineRounded className="sidebarIcon" />
            Messages
          </li>
          <li className="sideBarListItem">
            <BookmarkBorderRounded className="sidebarIcon" />
            Bookmarks
          </li>
          <li className="sideBarListItem">
            <ListAltOutlined className="sidebarIcon" />
            Lists
          </li>
          <li
            className="sideBarListItem"
            onClick={() => setActive("Profile")}
            style={{ fontWeight: active === "Profile" ? "bolder" : "" }}
          >
            <PersonOutlineOutlined className="sidebarIcon" />
            Profile
          </li>
          <li className="sideBarListItem" onClick={logout}>
            <MoreHorizOutlined className="sidebarIcon" />
            Logout
          </li>
        </ul>
        <button className="sideBarTweetButton">Tweet</button>
        <div className="profileSetting">
          <div className="row-nospace">
            <Avatar src="" />
            <div className="profileSettingInfo">
              <h5>Miral Ramani</h5>
              <p>@Miral Ramani</p>
            </div>
          </div>
          <MoreHoriz />
        </div>
      </div>
      <div>
        {active === "Home" ? <Home /> : null}
        {active === "Profile" ? <Profile /> : null}
      </div>
    </div>
  );
}

export default Sidebar;
