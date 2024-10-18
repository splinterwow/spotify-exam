import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Download,
  MoreHorizontal,
  ChevronLeft,
  Clock,
} from "lucide-react";
import axios from "../axios/axios";

// musiqa qoyilganidagi animationn
const PlayingAnimation = () => (
  <div className="flex items-center space-x-0.5 mr-2">
    <div className="w-0.5 h-2 bg-green-500 animate-music-bar-1"></div>
    <div className="w-0.5 h-3 bg-green-500 animate-music-bar-2"></div>
    <div className="w-0.5 h-4 bg-green-500 animate-music-bar-3"></div>
    <div className="w-0.5 h-2 bg-green-500 animate-music-bar-4"></div>
  </div>
);

const PlaylistItem = ({
  index,
  title,
  artist,
  album,
  duration,
  preview_url,
  onPlay,
  isPlaying,
  isCurrentTrack,
  onLike,
  isLiked,
}) => (
  <div
    className={`flex items-center px-4 py-2 cursor-pointer rounded-lg ${
      isCurrentTrack ? "bg-blue-900" : "hover:bg-gray-800"
    }`}
    onClick={() => onPlay(preview_url, title, artist)}
  >
    <div className="w-8 text-right mr-4">
      {isCurrentTrack && isPlaying ? <PlayingAnimation /> : index}
    </div>
    <div className="flex-grow">
      <div
        className={`font-semibold ${
          isCurrentTrack ? "text-green-500" : "text-gray-300"
        }`}
      >
        {title}
      </div>
      <div className="text-sm text-gray-400">{artist}</div>
    </div>
    <div className="text-sm text-gray-400 mr-4">{album}</div>
    <div className="text-sm text-gray-400 mr-4">{duration}</div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onLike(index - 1);
      }}
    >
      <Heart
        className={`w-5 h-5 ${
          isLiked ? "text-green-500 fill-current" : "text-gray-400"
        }`}
      />
    </button>
  </div>
);

const PlaylistDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState([]);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const playlistResponse = await axios.get(`/playlists/${id}`);
        setPlaylist(playlistResponse.data);
        setTracks(playlistResponse.data.tracks.items);


        const storedLikedTracks =
          JSON.parse(localStorage.getItem(`likedTracks_${id}`)) || [];
        setLikedTracks(storedLikedTracks);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist:", error);
        setError("Failed to load playlist");
        setLoading(false);
      }
    };

    fetchPlaylistData();

    return () => {
      audioRef.current.pause();
    };
  }, [id]);


   localStorage.setItem(`likedTracks_${id}`, JSON.stringify(likedTracks));

  const handlePlay = (preview_url, title, artist) => {
    if (currentTrack && currentTrack.preview_url === preview_url) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.src = preview_url;
      audioRef.current.play();
      setCurrentTrack({ preview_url, title, artist });
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else if (currentTrack) {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = (index) => {
    setLikedTracks((prev) => {
      const newLikedTracks = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      localStorage.setItem(`likedTracks_${id}`, JSON.stringify(newLikedTracks));

      return newLikedTracks;
    });
  };

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-white text-center mt-20">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-black text-white min-h-screen">
      <div className="p-8">
        <ChevronLeft
          onClick={() => navigate("/")}
          className="w-8 h-8 bg-black bg-opacity-50 rounded-full p-1 mb-4 cursor-pointer hover:bg-opacity-70"
        />
        <div className="flex items-start mb-6">
          <img
            src={playlist.images[0]?.url}
            alt={playlist.name}
            className="w-64 h-64 shadow-lg mr-6"
          />
          <div>
            <p className="uppercase text-sm font-bold mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4">{playlist.name}</h1>
            <p className="text-gray-300 mb-2">{playlist.description}</p>
            <p className="text-sm">
              <span className="font-bold">{playlist.owner.display_name}</span> •{" "}
              {playlist.followers.total} likes • {playlist.tracks.total} songs
            </p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <button
            onClick={handlePlayPause}
            className="mr-6 hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-green-500" />
            ) : (
              <Play className="w-16 h-16 text-green-500" />
            )}
          </button>
          <Heart className="w-8 h-8 mr-6 cursor-pointer hover:text-green-500" />
          <Download className="w-8 h-8 mr-6 cursor-pointer hover:text-green-500" />
          <MoreHorizontal className="w-8 h-8 cursor-pointer hover:text-green-500" />
        </div>

        <div className="mb-8">
          <div className="flex items-center text-gray-400 border-b border-gray-800 pb-2 mb-4">
            <div className="w-8 text-right mr-4">#</div>
            <div className="flex-grow">TITLE</div>
            <div className="w-1/4">ALBUM</div>
            <div className="w-16 text-right">
              <Clock className="w-5 h-5 inline" />
            </div>
            <div className="w-8"></div>
          </div>

          {tracks.map((item, index) => (
            <PlaylistItem
              key={item.track.id}
              index={index + 1}
              title={item.track.name}
              artist={item.track.artists
                .map((artist) => artist.name)
                .join(", ")}
              album={item.track.album.name}
              duration={formatDuration(item.track.duration_ms)}
              preview_url={item.track.preview_url}
              onPlay={handlePlay}
              isPlaying={isPlaying}
              isCurrentTrack={
                currentTrack &&
                currentTrack.preview_url === item.track.preview_url
              }
              onLike={handleLike}
              isLiked={likedTracks.includes(index)}
            />
          ))}
        </div>
      </div>

      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{currentTrack.title}</p>
              <p className="text-sm text-gray-400">{currentTrack.artist}</p>
            </div>
            <div className="flex items-center">
              <SkipBack className="w-6 h-6 mr-4 cursor-pointer hover:text-green-500" />
              <button
                onClick={handlePlayPause}
                className="hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white" />
                )}
              </button>
              <SkipForward className="w-6 h-6 ml-4 cursor-pointer hover:text-green-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistDetails;
