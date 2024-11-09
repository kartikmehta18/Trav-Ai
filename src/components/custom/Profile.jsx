import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center gap-4">
        <img src={user.picture} alt={user.name} className="rounded-full h-10 w-10" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
