import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="cursor-pointer text-white bg-gray-900 px-4 py-2 rounded"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
