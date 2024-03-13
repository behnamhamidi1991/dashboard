import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1>Now this is your own profile</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default UserProfile;
