import React from "react";
import "./header.css";
import netflixlogo from "../../assets/image/netflixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul className="menu-list">
            <li>
              <img src={netflixlogo} alt="Netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <IoMenu />
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
