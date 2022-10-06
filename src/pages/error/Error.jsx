import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className={'text-center mt-4 text-lg font-size: 2rem'}>
      <h2> Page Not Found</h2>
      <button onClick={home} className={"bg-red-300 p-3 rounded text-red-600 mt-2 hover:text-blue-800"}>
        Go Home
      </button>
    </div>
  );
}
