import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);
  console.log("My User", user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("User Logged Out!");
        return <Navigate to="/products" replace />;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row mx-5 mt-5">
          <h2>{user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Uid: {user.uid}</h2>
          <button
            className="btn btn-primary col-md-4 mt-3"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
