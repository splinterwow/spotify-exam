import React, { useState } from "react";
import { Heart, Clock } from "lucide-react";

const SpotifyInterface = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handlePlay = (songId) => {
    if (currentSong === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(songId);
      setIsPlaying(true);
    }
  };

  const toggleLike = (songId, e) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  const PlayingIndicator = () => (
    <div className="flex gap-1 items-center">
      <div
        className="w-1 h-3 bg-green-500 animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-1 h-3 bg-green-500 animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-1 h-3 bg-green-500 animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-52 h-52 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
          <Heart className="w-24 h-24 text-white" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400">PUBLIC PLAYLIST</p>
          <h1 className="text-6xl font-bold mt-2">Liked Songs</h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm">davedirect3</span>
            <span className="text-sm">• 5 songs,</span>
            <span className="text-sm text-gray-400">14 min</span>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[auto,2fr,2fr,1fr] gap-4 px-4 py-2 text-gray-400 border-b border-gray-700">
        <h2 className="cursor-pointer">#</h2>
        <h2 className="cursor-pointer">TITLE</h2>
        <h2 className="cursor-pointer">ALBUM</h2>
        <div className="flex justify-end cursor-pointer">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      {/* Song Items - Static Content */}
      <div
        className={`grid grid-cols-[auto,2fr,2fr,1fr] gap-2 px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
          currentSong === 1 ? "bg-gray-800" : ""
        }`}
        onClick={() => handlePlay(1)}
      >
        <div className="flex items-center w-6">
          {currentSong === 1 && isPlaying ? (
            <PlayingIndicator />
          ) : (
            <span className={`${currentSong === 1 ? "text-green-500" : ""}`}>
              1
            </span>
          )}
        </div>
        <div>
          <p
            className={`${
              currentSong === 1 ? "text-green-500" : "text-white"
            } font-medium`}
          >
            Play It Safe
          </p>
          <p className="text-sm text-gray-400">Julie Wolf</p>
        </div>
        <h3 className="text-gray-400">Music's</h3>
        <div className="flex items-center justify-end gap-8">
          <Heart
            className={`w-5 h-5 cursor-pointer ${
              likes[1] ? "fill-green-500 text-green-500" : "text-gray-400"
            }`}
            onClick={(e) => toggleLike(1, e)}
          />
          <span>2:12</span>
        </div>
      </div>

      <div
        className={`grid grid-cols-[auto,2fr,2fr,1fr] gap-4 px-4 py-3 hover:bg-gray-800 rounded-md cursor-pointer ${
          currentSong === 2 ? "bg-gray-800" : ""
        }`}
        onClick={() => handlePlay(2)}
      >
        <div className="flex items-center w-6">
          {currentSong === 2 && isPlaying ? (
            <PlayingIndicator />
          ) : (
            <span className={`${currentSong === 2 ? "text-green-500" : ""}`}>
              2
            </span>
          )}
        </div>
        <div>
          <p
            className={`${
              currentSong === 2 ? "text-green-500" : "text-white"
            } font-medium`}
          >
            Ocean Front Apt.
          </p>
          <p className="text-sm text-gray-400">ayokay</p>
        </div>
        <h3 className="text-gray-400">Music's</h3>
        <div className="flex items-center justify-end gap-8">
          <Heart
            className={`w-5 h-5 cursor-pointer ${
              likes[2] ? "fill-green-500 text-green-500" : "text-gray-400"
            }`}
            onClick={(e) => toggleLike(2, e)}
          />
          <span>2:12</span>
        </div>
      </div>

      <div
        className={`grid grid-cols-[auto,2fr,2fr,1fr] gap-4 px-4 py-3 hover:bg-gray-800 rounded-md cursor-pointer ${
          currentSong === 3 ? "bg-gray-800" : ""
        }`}
        onClick={() => handlePlay(3)}
      >
        <div className="flex items-center w-6">
          {currentSong === 3 && isPlaying ? (
            <PlayingIndicator />
          ) : (
            <span className={`${currentSong === 3 ? "text-green-500" : ""}`}>
              3
            </span>
          )}
        </div>
        <div>
          <p
            className={`${
              currentSong === 3 ? "text-green-500" : "text-white"
            } font-medium`}
          >
            Free Spirit
          </p>
          <p className="text-sm text-gray-400">Khalid</p>
        </div>
        <h3 className="text-gray-400">Music's</h3>
        <div className="flex items-center justify-end gap-8">
          <Heart
            className={`w-5 h-5 cursor-pointer ${
              likes[3] ? "fill-green-500 text-green-500" : "text-gray-400"
            }`}
            onClick={(e) => toggleLike(3, e)}
          />
          <span>3:02</span>
        </div>
      </div>

      <div
        className={`grid grid-cols-[auto,2fr,2fr,1fr] gap-4 px-4 py-3 hover:bg-gray-800 rounded-md cursor-pointer ${
          currentSong === 4 ? "bg-gray-800" : ""
        }`}
        onClick={() => handlePlay(4)}
      >
        <div className="flex items-center w-6">
          {currentSong === 4 && isPlaying ? (
            <PlayingIndicator />
          ) : (
            <span className={`${currentSong === 4 ? "text-green-500" : ""}`}>
              4
            </span>
          )}
        </div>
        <div>
          <p
            className={`${
              currentSong === 4 ? "text-green-500" : "text-white"
            } font-medium`}
          >
            Remind You
          </p>
          <p className="text-sm text-gray-400">FRENSHIP</p>
        </div>
        <h3 className="text-gray-400">Music's</h3>
        <div className="flex items-center justify-end gap-8">
          <Heart
            className={`w-5 h-5 cursor-pointer ${
              likes[4] ? "fill-green-500 text-green-500" : "text-gray-400"
            }`}
            onClick={(e) => toggleLike(4, e)}
          />
          <span>4:25</span>
        </div>
      </div>

      <div
        className={`grid grid-cols-[auto,2fr,2fr,1fr] gap-4 px-4 py-3 hover:bg-gray-800 rounded-md cursor-pointer ${
          currentSong === 5 ? "bg-gray-800" : ""
        }`}
        onClick={() => handlePlay(5)}
      >
        <div className="flex items-center w-6">
          {currentSong === 5 && isPlaying ? (
            <PlayingIndicator />
          ) : (
            <span className={`${currentSong === 5 ? "text-green-500" : ""}`}>
              5
            </span>
          )}
        </div>
        <div>
          <p
            className={`${
              currentSong === 5 ? "text-green-500" : "text-white"
            } font-medium`}
          >
            Same Old
          </p>
          <p className="text-sm text-gray-400">SHY Martin</p>
        </div>
        <h3 className="text-gray-400">Music's</h3>
        <div className="flex items-center justify-end gap-8">
          <Heart
            className={`w-5 h-5 cursor-pointer ${
              likes[5] ? "fill-green-500 text-green-500" : "text-gray-400"
            }`}
            onClick={(e) => toggleLike(5, e)}
          />
          <span>2:56</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifyInterface;
