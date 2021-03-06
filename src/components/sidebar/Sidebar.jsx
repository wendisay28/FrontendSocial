import "./sidebar.css";
import {FeedOutlined
  ,ExploreOutlined,OndemandVideoOutlined, Groups,
 TurnedInNot, LibraryBooksOutlined, WorkOutline, Event, School, } from "@mui/icons-material";
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FeedOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <ExploreOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Explore</span>
            </li>
            <li className="sidebarListItem">
              <OndemandVideoOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Groups className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <TurnedInNot className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <LibraryBooksOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Blog</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) =>(
            <CloseFriend key={u.id} user={u}/>
          ))}
                       
        </ul>    
        </div>
      </div>
    );
 }
 