import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1656858076/Pixelion_6_uqhbjs.png"
            alt="text"
          />
        </div>
        <div className="last-nav">
          <div className="flex-col-center h6-text">
            <i class="fas fa-photo-video h3-text"></i>
            <p className="">Add Post</p>
          </div>
          <div className="profile-nav">
            <img
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
              class="avatar-circle avatar-mid"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
