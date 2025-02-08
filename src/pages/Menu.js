import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitel">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return <MenuItem />;
        })}
      </div>
    </div>
  );
}

export default Menu;
