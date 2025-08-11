import React from "react";
import "./addPost.css"; //importing CSS for styling
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function AddPost() {
  return (
    <div>
      <div className="addPost">
        <div className="addPostContainer">
          <div className="addPostTop">
            <img src="/Images/2.jpg" alt="" className="addPostPic" />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="addPostInput"
            />
          </div>

          <hr className="postHr" />

          <div className="addPostBottom">
            <div className="addPostOptions">
              <div className="addPostOption">
                <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
                <span className="addPostOptionText">Photo/Video</span>
              </div>

              <div className="addPostOption">
                <AddLocationAltIcon htmlColor="red" className="addPhoto" />
                <span className="addPostOptionText">Check in</span>
              </div>

              <div className="addPostOption">
                <LocalOfferIcon htmlColor="blue" className="addPhoto" />
                <span className="addPostOptionText">Tag people</span>
              </div>

              <div className="addPostOption">
                <LiveTvIcon htmlColor="tomato" className="addPhoto" />
                <span className="addPostOptionText">Live Video</span>
              </div>
            </div>

            <button className="addPostButton">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
