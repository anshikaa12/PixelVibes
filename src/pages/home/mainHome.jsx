import React from "react";

function MainHome() {
  return (
    <div className="main-home-sec flex-col">
      <div className="basic-card add-post-card">
        <div className="card-header">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1657030678/1834021883_uzohjq.jpg"
            className="avatar-circle avatar-mid"
          />
          <div className="post-sec header-text">
            <span className="card-subtext">Whats on your mind?</span>
          </div>
        </div>
      </div>
      {/* post section */}
      <div className="basic-card post">
        <div className="header-text flex-row">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
            class="avatar-circle avatar-mid"
          />
          <div className="head-text-sec flex-col">
            <p className="h5-text">Anshi</p>
            <span className="card-subtext text-color">a month ago</span>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1650721311/pexels-designecologist-1779487_nseqr8.jpg"
          className="card-img"
        />
        <div className="card-body">
          <p className="card-content">
            here comes your caption for the picture!!
          </p>
          <div className="card-footer">
            <i className="far fa-heart card-icon"></i>
            <i class="fas fa-comment card-icon"></i>
            <i class="fas fa-share card-icon"></i>
            <div className="connect-part">
              <i class="fas fa-bookmark card-icon"></i>
            </div>
          </div>
        </div>
        <p className="h5-text text-color">5 likes, 3 comments</p>
      </div>
      <div className="basic-card post">
        <div className="header-text flex-row">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
            class="avatar-circle avatar-mid"
          />
          <div className="head-text-sec flex-col">
            <p className="h5-text">Anshi</p>
            <span className="card-subtext text-color">a month ago</span>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1650721311/pexels-designecologist-1779487_nseqr8.jpg"
          className="card-img"
        />
        <div className="card-body">
          <p className="card-content">
            here comes your caption for the picture!!
          </p>
          <div className="card-footer">
            <i className="far fa-heart card-icon"></i>
            <i class="fas fa-comment card-icon"></i>
            <i class="fas fa-share card-icon"></i>
            <div className="connect-part">
              <i class="fas fa-bookmark card-icon"></i>
            </div>
          </div>
          <p className="h5-text text-color">5 likes, 3 comments</p>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
