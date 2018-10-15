import React from "react";

function Profile() {
  const imgPath = process.env.PUBLIC_URL + "/assets/img/";
  return (
    <div className="profile">
      <div className="profile__image-box">
        <img
          src="/assets/img/avatar-square.jpg`}"
          alt=""
          className="profile__img"
        />
      </div>
      <div className="profile__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        imperdiet quam non risus pharetra posuere. Donec a erat orci. Phasellus
        vehicula sapien sit amet elementum sagittis.
      </div>
    </div>
  );
}
export default Profile;
