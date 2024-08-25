import Navbar from "@/components/navbar/page";
import React from "react";

const Opportunitieslayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Opportunitieslayout;
