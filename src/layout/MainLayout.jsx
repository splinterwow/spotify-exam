import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MusicPlayer from "../components/MusicPlayer";

function MainLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <LeftSidebar />
      <main className={`ml-64 ${open ? "mr-64" : ""} pb-20`}>{children}</main>
      <RightSidebar open={open} setOpen={setOpen} />

      <div className="fixed bottom-0 left-0 w-full">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default MainLayout;
