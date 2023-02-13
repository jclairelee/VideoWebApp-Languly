import { BarChartRounded, DashboardRounded } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HomeIcon from "@mui/icons-material/Home";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import Item from "./item/Item";
import "./DashboardSideBar.scss";

function DashboardSideBar() {
  const navigate = useNavigate();

  const clickHandler = () => {
    localStorage.clear();
    navigate("/home");
  };
  return (
    <article>
      <div id="sidebar">
        <div className="show">
          <Item
            icon={
              <HomeIcon
                onClick={() => {
                  navigate("/home");
                }}
              />
            }
            name="Home"
          />
          <Item icon={<LogoutIcon onClick={clickHandler} />} name="Logout" />
          <Item
            icon={
              <DashboardRounded
                onClick={() => {
                  navigate("/dashboard");
                }}
              />
            }
            name="Dashboard"
          />
          <Item
            icon={<BarChartRounded onClick={() => {}} />}
            name="Call History"
          />
          <Item icon={<PeopleIcon />} name="Friends" />
          <Item icon={<LocalPostOfficeIcon />} name="Invitation" />
          <Item icon={<PersonSearchIcon />} name="Search" />
          <Item icon={<LocalLibraryIcon />} name="Resourse" />
        </div>
      </div>
    </article>
  );
}
export default DashboardSideBar;
