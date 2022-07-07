import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Profilepost from "./profilepost";

function Profile() {
  return (
    <div>
      <Nav />
      <div className="main-sect flex-row">
        <Sidebar />
        <Profilepost/>
      </div>
    </div>
  );
}

export default Profile;
