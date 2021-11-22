import "./share.css"
import {Photo,Loyalty,RoomOutlined,FavoriteBorder} from "@mui/icons-material";

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpg" alt=" "/>
                    <input placeholder="¡tell me a story!" className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOption">
                        <div className="shareOption">
                            <Photo htmlColor="#46119b" className="shreIcon"/>
                            <span className="shareOptionText"> Photo or Video</span>
                        </div>
                          <div className="shareOption">
                            <Loyalty htmlColor="#46119b" className="shreIcon"/>
                          <span className="shareOptionText"> Tag</span>
                          </div>
                          <div className="shareOption">
                            <RoomOutlined htmlColor="#46119b" className="shreIcon"/>
                          <span className="shareOptionText"> Location</span>
                          </div>
                          <div className="shareOption">
                            <FavoriteBorder htmlColor="#46119b" className="shreIcon"/>
                          <span className="shareOptionText"> Feelings</span>
                          </div>              
                    </div>
                    <button className="shareButton" type="submit">
                        Scream
                    </button>
                </div>
            </div>
        </div>
        
    )
}
