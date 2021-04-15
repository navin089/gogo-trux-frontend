import React, { useContext } from "react";
import "./NavBar.css";
import { Avatar, IconButton } from '@material-ui/core';
import { PanelContext } from "../PanelContext";

function NavBar() {

  const { item, setItem } = useContext(PanelContext) 
  const menuList = ["Dashboard", , 
              "Admin", "Company", "Users","Partners", "Driver Taxi",
              "Order", "Vehicles", "Trips", "Site Statistics" ];

  const handleClick = (item) => {
      setItem(item);
  }
  return (
    <div className="navbar">
      <div className="navbar__header">
        <h3>GoGoTRux</h3>
      </div>
      <div className="navbar__menuContainer">
        {
          menuList.map((item) => (
            <p onClick={() => handleClick(item)}>{item}</p>
          ))
        }
      </div>
      <div className="navbar__avatar">
      <IconButton>
      <Avatar 
        src="https://i0.wp.com/www.thedailybiography.com/wp-content/uploads/2020/07/nancy-jewel-mcdonie-instagram.jpg"
      />
      </IconButton>
      </div>
    </div>
  );
}

export default NavBar;
