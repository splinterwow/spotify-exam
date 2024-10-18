import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Maximize2,
  Heart,
} from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="bg-black text-white p-2 w-full mx-auto shadow-xl h-24  flex items-center justify-between">
      <div className="flex items-center space-x-4 w-1/4">
        <img
          src="/api/placeholder/60/60"
          alt="Album cover"
          className="w-14 h-14 rounded"
        />
        <div className="text-sm">
          <h2 className="font-bold truncate">Play It Safe</h2>
          <p className="text-xs text-gray-400 truncate">Julia Wolf</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/2">
        <div className="flex justify-center items-center space-x-4 mb-2">
          <button className="focus:outline-none">
            <SkipBack className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button
            onClick={togglePlay}
            className="bg-green-500 text-black rounded-full p-1.5 hover:bg-green-400 focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          <button className="focus:outline-none">
            <SkipForward className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
        <div className="w-full">
          <div className="bg-gray-600 h-1 w-full rounded-full">
            <div className="bg-green-500 h-1 w-3/5 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs mt-1 text-gray-400">
            <span>2:39</span>
            <span>4:22</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 w-1/4 justify-end">
        <button onClick={toggleLike} className="focus:outline-none">
          <Heart
            className={`w-5 h-5 ${
              isLiked ? "text-green-500 fill-current" : "text-gray-400"
            }`}
          />
        </button>
        <Repeat className="w-4 h-4 text-gray-400" />
        <Maximize2 className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default MusicPlayer;
