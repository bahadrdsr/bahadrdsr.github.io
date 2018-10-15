import React, { Component } from "react";
import Profile from "../Profile";
import LatestPosts from "../LatestPosts";
import Tags from "../Tags";
import SocialLinks from "../SocialLinks";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Profile />
        <SocialLinks />
        <LatestPosts />
        <Tags />
      </div>
    );
  }
}
export default Sidebar;
