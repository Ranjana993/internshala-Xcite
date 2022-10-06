import { Login } from "@mui/icons-material";
import React, { useState } from "react";
import Signup from "../../components/Signup";
// import CandidateLogin from "../../components/Login";
// import CandidateSignup from "../../components/Signup";

export default function CandidateAuth() {
  const [toggal, settoggal] = useState(false);

  return (
    <div>
      {toggal === true ? (
        <Login />
      ) : (
        <Signup login={settoggal} />
      )}
    </div>
  );
}
