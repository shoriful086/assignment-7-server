"use client";

import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-full h-full mt-40">
      <div className="shadow-2xl p-2 rounded-lg">
        <CircularProgress color="success" size={36} />
        <p className="mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
