import React from "react";
import { X, UserCircle2, Settings, UserRoundCog } from "lucide-react";

const RightSidebar = ({ open, setOpen }) => {
  return (
    open && (
      <div className="bg-black fixed right-0 top-0 bottom-0 text-white p-4 w-64 h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Friend Activity</h2>
          <UserRoundCog className="ml-12 cursor-pointer" size={20} />
          <X
            onClick={() => {
              setOpen(false);
            }}
            className="cursor-pointer"
            size={20}
          />
        </div>

        <p className="text-sm mb-4">
          Let friends and followers on Spotify see what you're listening to.
        </p>

        <div className="space-y-3 mb-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <UserCircle2 size={24} />
              <div className="bg-gray-700 h-4 w-32 rounded"></div>
            </div>
          ))}
        </div>

        <p className="text-xs mb-4">
          Go to Settings {">"} Social and enable "Share my listening activity on
          Spotify." You can turn this off at any time.
        </p>

        <button className="bg-white text-black w-full py-2 rounded-full font-semibold">
          SETTINGS
        </button>
      </div>
    )
  );
};

export default RightSidebar;
