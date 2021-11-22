import "./topbar.css";
import { Search, PersonOutline, ForumOutlined, NotificationsNoneOutlined,MenuOutlined } from "@mui/icons-material";

export default function Topbar() {
    return(
        <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Grimmcher</span>
        </div>
        <div className="menu">
              <MenuOutlined/>
              <span className="menu-line"></span>
            </div>       
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search for friend, post o video" className="searchInput"/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonOutline />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ForumOutlined/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsNoneOutlined />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
            <img src= "assets/person/1.jpg" alt=" " className="topbarImg"/>
        </div>
      </div>
    );
  }