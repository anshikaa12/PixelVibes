import React from "react";

function FollowSuggestion() {
  return (
    <div className="follow-suggestion">
      <div className="follower flex-row">
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
          class="avatar-circle avatar-mid"
        />
        <div className="follower-info flex-col-center">
          <p className="h6-text">Anshika Agarwal🥰</p>
          <p className="email-text h5-text">Anshi@gmail.com</p>
        </div>
        <div className="follow-btn flex-col-center">
          <button className="small-btn btn-primary">Follow</button>
        </div>
      </div>
      <div className="follower flex-row">
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1657030678/1834021883_uzohjq.jpg"
          class="avatar-circle avatar-mid"
        />
        <div className="follower-info flex-col-center">
          <p className="h6-text">Naruto uzumaki🔥</p>
          <p className="email-text h5-text">dattebayo@gmail.com</p>
        </div>
        <div className="follow-btn flex-col-center">
          <button className="small-btn btn-primary">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default FollowSuggestion;
