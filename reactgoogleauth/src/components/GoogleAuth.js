import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";

const GoogleAuth = () => {
  const [name, setName] = useState("");
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setName(userInfo.data.name);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        marginTop: "100px",
        fontSize: "32px",
      }}
    >
        
      {name ? (
        <div>
          <h3>Logged In User : {name}</h3>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "blue",
              borderRadius: "5px",
              padding: "10px",
            }}
            onClick={() =>setName("")}
          >Logout</button>

        </div>
      ) : (
        <button
          style={{
            fontSize: "24px",
            backgroundColor: "blue",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => login()}
        >
          Sign in with Google
        </button>

        
      )}
    </div>
  );
};

export default GoogleAuth;
