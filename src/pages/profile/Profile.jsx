import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
    <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
              <div className="profileRightTop">
                  <div className="profileCover">

                  <img className="profileCoverImg" src="assets/post/3.jpg" alt="" />
                  <img className="profileUserImg" src="assets/person/7.jpg" alt="" />
                      
                  </div>
                  <div className="profileInfo">
                      <h4 className=" profileInfoName">lara croff</h4>
                      <span className=" profileInfoDesc">hello my friends</span>
                  </div>
              </div>
              <div className="profileRightBottom"></div>
                <Feed/>
                <Rightbar profile/>

          </div>
        </div>
      </>
        
    );
}
