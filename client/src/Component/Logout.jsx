import React from "react";

function Logout() {
  const handleLogout = (e) => {
    e.preventDefault();
    let SavedToken = localStorage.getItem("token");
    if (SavedToken) {
      localStorage.removeItem("token");
      alert("Logout successfully");
    } else {
      alert("already logout");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
