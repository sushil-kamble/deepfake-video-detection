import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
function Detection() {
  const { logoutUser } = useContext(AuthContext);
  return (
    <div>
      <h1>This is Detection page</h1>
      <button onClick={logoutUser} className="t-btn text-white bg-red-600">
        Logout
      </button>
    </div>
  );
}

export default Detection;
