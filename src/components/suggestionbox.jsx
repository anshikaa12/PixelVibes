import React from "react";
import FollowSuggestion from "./followSuggestion";

function Suggestionbox() {
  return (
    <div className="suggestion-box">
      <div className="profile-sec">
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1656943150/177-1773695_hinata-hyuga-png-download-hinata-hyuga-chibi-png_zgb3rq.jpg"
          class="avatar-circle avatar-big"
        />
        <p className="h6-text">Anshika Agarwal🥰</p>
        <p className="email-text h5-text">Anshi@gmail.com</p>
      </div>
      <div className="suggestions-head flex-row">
        <p className="h4-text">Suggestions for you</p>
        <p className="h4-text seeall">See All</p>
      </div>
      <div className="follow">
        <FollowSuggestion/>
      </div>
    </div>
  );
}

export default Suggestionbox;
