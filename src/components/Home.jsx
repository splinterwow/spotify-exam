import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const [data, setData] = useState([]);
  const [mixesData, setMixesData] = useState([]);
  const [madeData, setMadeData] = useState([]);
  const [playedData, setPlayedData] = useState([]);
  const [jumpData, setJumpData] = useState([]);
  const [yoursData, setYoursData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vaqtga qarab salomlashish

  //salom slash
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good morning");
    else if (hour >= 12 && hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // Ma'lumotlarni yuklash uchun funksiyalar
  const fetchDataOne = async () => {
    try {
      const response = await axios.get("/browse/featured-playlists");
      setData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching featured playlists:", error);
      setError("Failed to load featured playlists");
    }
  };

  const fetchDataTwo = async () => {
    try {
      const response = await axios.get("/browse/categories/toplists/playlists");
      setMixesData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching top mixes:", error);
      setError("Failed to load top mixes");
    }
  };

  const fetchDataThree = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
      );
      setMadeData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching made for you playlists:", error);
      setError("Failed to load made for you playlists");
    }
  };

  const fetchDataFour = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
      );
      setPlayedData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching recently played:", error);
      setError("Failed to load recently played");
    }
  };

  const fetchDataFive = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"
      );
      setJumpData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching jump back playlists:", error);
      setError("Failed to load jump back playlists");
    }
  };

  const fetchDataSix = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
      );
      setYoursData(response.data.playlists.items);
    } catch (error) {
      console.error("Error fetching your playlists:", error);
      setError("Failed to load your playlists");
    }
  };

  // Barcha ma'lumotlarni yuklash
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchDataOne(),
          fetchDataTwo(),
          fetchDataThree(),
          fetchDataFour(),
          fetchDataFive(),
          fetchDataSix(),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load some content");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Playlist ga o'tish uchun handler
  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-950 to-gray-950">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-950 to-gray-950">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-950 text-white p-8">
      {/* Navigation Controls */}
      <div className="flex items-center mb-6">
        <ChevronLeft className="w-8 h-8 bg-black bg-opacity-50 mr-2 hover:bg-slate-500 transition-all p-1 rounded-full cursor-pointer" />
        <ChevronRight className="w-8 h-8 bg-black bg-opacity-50 hover:bg-slate-500 transition-all p-1 rounded-full cursor-pointer" />
      </div>

      {/* Featured Playlists */}
      <div>
        <h1 className="text-3xl font-bold">{greeting}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {data?.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-[#1c3772] h-20 rounded-[10px] flex items-center space-x-2 p-3 cursor-pointer hover:bg-[#2c4782] transition-colors group"
              onClick={() => handlePlaylistClick(item.id)}
            >
              <div className="relative w-[74px] h-[64px]">
                <img
                  className="rounded-[8px] h-full w-full object-cover"
                  src={item.images[0]?.url || "https://picsum.photos/400"}
                  alt={item.name}
                />
              </div>
              <div className="font-semibold text-sm truncate flex-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Mixes Section */}
      <Section
        title="Your top mixes"
        data={mixesData}
        onPlaylistClick={handlePlaylistClick}
      />

      {/* Made For You Section */}
      <Section
        title="Made for you"
        data={madeData}
        onPlaylistClick={handlePlaylistClick}
      />

      {/* Recently Played Section */}
      <Section
        title="Recently played"
        data={playedData}
        onPlaylistClick={handlePlaylistClick}
      />

      {/* Jump Back In Section */}
      <Section
        title="Jump back in"
        data={jumpData}
        onPlaylistClick={handlePlaylistClick}
      />

      {/* Uniquely Yours Section */}
      <Section
        title="UNIQUELY YOURS"
        data={yoursData}
        onPlaylistClick={handlePlaylistClick}
      />
    </div>
  );
}

// Section komponenti
function Section({ title, data, onPlaylistClick }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="cursor-pointer hover:underline text-sm font-semibold">
          Show all
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
        {data?.slice(0, 5).map((item, index) => {
          const maxLength = 39;
          const truncatedDescription =
            item.description?.length > maxLength
              ? item.description.slice(0, maxLength) + "..."
              : item.description;

          return (
            <div
              key={index}
              className="bg-[#161838] p-4 rounded-lg cursor-pointer hover:bg-[#1f204d] transition-colors group"
              onClick={() => onPlaylistClick(item.id)}
            >
              <div className="relative aspect-square mb-4 group">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={item.images[0]?.url || "https://picsum.photos/400"}
                  alt={item.name}
                />
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 rounded-full items-center justify-center hidden group-hover:flex shadow-lg">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="font-semibold mb-1 truncate">{item.name}</div>
              <div className="text-sm text-gray-400 line-clamp-2">
                {truncatedDescription}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
