import React from "react";
import { Home, Search, Library, PlusSquare, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LeftSidebar() {
  const navigate = useNavigate();

  const handleLikeClick = () => {
    navigate("/likes");
  };

  const handleHome = () => {
    navigate("/");
  };

  const playlists = [
    "Chill Mix",
    "Insta Hits",
    "Your Top Songs 2021",
    "Mellow Songs",
    "Anime Lofi & Chillhop Music",
    'BG Afro "Select" Vibes',
    'Afro "Select" Vibes',
    "Happy Hits!",
    "Deep Focus",
    "Instrumental Study",
    "OST Compilations",
    "Nostalgia for old souled mill...",
    "Mixed Feelings",
    "Deep Focus",
  ];

  return (
    <div className="flex h-screen fixed left-0 top-0 bottom-0">
      <div className="w-64 bg-black text-gray-300 p-6 flex flex-col">
        <div className="space-y-6">
          {/* Main Menu Items */}
          <div
            className="flex items-center space-x-4 cursor-pointer hover:text-white"
            onClick={handleHome}
          >
            <Home size={24} />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
            <Search size={24} />
            <span>Search</span>
          </div>
          <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
            <Library size={24} />
            <span>Your Library</span>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {/* Playlist Create */}
          <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
            <PlusSquare size={24} />
            <span>Create Playlist</span>
          </div>
          {/* Liked Songs */}
          <div
            onClick={handleLikeClick}
            className="flex items-center space-x-4 cursor-pointer hover:text-white"
          >
            <Heart size={24} fill="purple" color="white" />
            <span>Liked Songs</span>
          </div>
        </div>

        <hr className="my-4 border-gray-700" />

        <div
          className="overflow-y-auto flex-grow"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide Scrollbar */}
          <style>{`
            div::-webkit-scrollbar {
              display: none; /* Chrome va Safari uchun scrollbar'ni yashirish */
            }
          `}</style>
          {/* Playlists */}
          {playlists.map((playlist, index) => (
            <div key={index} className="py-2 cursor-pointer hover:text-white">
              {playlist}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
