import React from "react";

function Profilepost() {
  return (
    <div className="profile flex-col-center">
      <div className="main-profile">
        <div className="banner">
          <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1657126601/2-purple-lavender-flower-in-field-summer-scenic-landscape-banner-jelena-jovanovic_vzjrbi.jpg" />
        </div>
        <div className="profile-details flex-col">
          <div className="profile-pic flex-row">
            <div className="pic">
              {" "}
              <img
                src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
                class="avatar-circle avatar-big"
              />
            </div>
            <div className="setting">
              <button className="mid-btn btn-primary">
                <i class="fas fa-cog"></i>Edit Profile
              </button>
              <button className="mid-btn btn-primary">
                <i class="fas fa-user-cog"></i>Password
              </button>
            </div>
          </div>
          <div className="profile-bio">
            <p className="h4-text wt-bold">Anshika Agarwal</p>
            <p className="h5-text">ani@gmail.com</p>
            <div className="bio">
              <p className="h6-text wt-md">I am cute and this is my bio</p>
              <p className="h6-text wt-md">I am freakin 21.</p>
            </div>
            <div className="count">
              <p className="h6-text wt-md">
                <span className="countf wt-bold">0 </span>followers{" "}
                <span className="countf wt-bold">1</span> following
              </p>
            </div>
          </div>
        </div>
        <div className="my-feed flex-col">
          <div className="myfeed-btn flex-row">
            <p className="h4-text wt-bold">
              <i class="feedi fas fa-clone"></i> Posts
            </p>
            <p className="h4-text wt-bold">
              <i class="feedi fas fa-bookmark"></i>Saved
            </p>
            <p className="h4-text wt-bold">
              <i class="feedi fas fa-thumbs-up"></i>Liked
            </p>
          </div>
          <div className="image-container column-3-grid"></div>
        </div>
      </div>
    </div>
  );
}

export default Profilepost;
