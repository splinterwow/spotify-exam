import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const success = () => toast.success("now you can see all albums");
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [mixesData, setMixesData] = useState([]);
  const [madeData, setMadeData] = useState([]);
  const [playedData, setPlayedData] = useState([]);
  const [jumpData, setJumpData] = useState([]);
  const [yoursData, setYoursData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  const [all, setAll] = useState(4);
  const [all1, setAll1] = useState(4);
  const [all2, setAll2] = useState(4);
  const [all3, setAll3] = useState(4);
  const [all4, setAll4] = useState(4);


  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  const fetchDataOne = async () => {
    try {
      const response = await axios.get("/browse/featured-playlists");
      setData(response.data.playlists.items);

      if (response.status === 401) {
        throw new Error("401");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        getToken();
        setCounter(counter + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  const fetchDataTwo = async () => {
    try {
      const response = await axios.get("/browse/categories/toplists/playlists");
      setMixesData(response.data.playlists.items);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await getToken();
        setCounter((prev) => prev + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  const fetchDataThree = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
      );
      setMadeData(response.data.playlists.items);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await getToken();
        setCounter((prev) => prev + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  const fetchDataFour = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
      );
      setPlayedData(response.data.playlists.items);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await getToken();
        setCounter((prev) => prev + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  const fetchDataFive = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"
      );
      setJumpData(response.data.playlists.items);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await getToken();
        setCounter((prev) => prev + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  const fetchDataSix = async () => {
    try {
      const response = await axios.get(
        "/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
      );
      setYoursData(response.data.playlists.items);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await getToken();
        setCounter((prev) => prev + 1);
      } else {
        console.log("Xato yuz berdi:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
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
        console.error("Ma'lumotlarni olishda xato:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [counter]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-950 text-white p-8">
      <ToastContainer />
      {/* Navigation Controls */}
      <div className="flex items-center mb-6">
        <ChevronLeft
          className="w-8 h-8 bg-black bg-opacity-50 mr-2 hover:bg-slate-500 transition-all p-1 rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <ChevronRight
          className="w-8 h-8 bg-black bg-opacity-50 hover:bg-slate-500 transition-all p-1 rounded-full cursor-pointer"
          onClick={() => navigate(1)}
        />
      </div>

      {/* Featured Playlists Grid */}
      <div>
        <h1 className="text-3xl font-bold">Good afternoon</h1>
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

      {/* Your Top Mixes Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Your top mixes</h2>
          <span
            onClick={() => {
              setAll(8);
              success();
            }}
            className="cursor-pointer mr-16 hover:underline"
          >
            Show All
          </span>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          {mixesData?.slice(0, all).map((item, index) => {
            const maxLength = 20;
            const truncatedDescription =
              item.description.length > maxLength
                ? item.description.slice(0, maxLength) + "... and more"
                : item.description;
            return (
              <div
                onClick={() => handlePlaylistClick(item.id)}
                key={index}
                className="cursor-pointer bg-[#161838] w-[200px] h-[324px] p-4 rounded-lg hover:bg-[#1c1f4a] transition-colors"
              >
                <div className="w-full h-[182px] bg-black rounded-md mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={item.images[0]?.url || "https://picsum.photos/400"}
                    alt={item.name}
                  />
                </div>
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {truncatedDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Made For You Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Made for you</h2>
          <span
            onClick={() => {
              setAll4(8);
              success();
            }}
            className="cursor-pointer mr-16 hover:underline"
          >
            Show All
          </span>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          {madeData?.slice(0, all4).map((item, index) => {
            const maxLength = 20;
            const truncatedDescription =
              item.description.length > maxLength
                ? item.description.slice(0, maxLength) + "... and more"
                : item.description;
            return (
              <div
                onClick={() => handlePlaylistClick(item.id)}
                key={index}
                className="cursor-pointer bg-[#161838] w-[200px] h-[324px] p-4 rounded-lg hover:bg-[#1c1f4a] transition-colors"
              >
                <div className="w-full h-[182px] bg-black rounded-md mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={item.images[0]?.url || "https://picsum.photos/400"}
                    alt={item.name}
                  />
                </div>
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {truncatedDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recently Played Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recently played</h2>
          <span
            onClick={() => {
              setAll1(8);
              success();
            }}
            className="cursor-pointer mr-16 hover:underline"
          >
            Show All
          </span>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          {playedData?.slice(0, all1).map((item, index) => {
            const maxLength = 20;
            const truncatedDescription =
              item.description.length > maxLength
                ? item.description.slice(0, maxLength) + "... and more"
                : item.description;
            return (
              <div
                onClick={() => handlePlaylistClick(item.id)}
                key={index}
                className="cursor-pointer bg-[#161838] w-[200px] h-[324px] p-4 rounded-lg hover:bg-[#1c1f4a] transition-colors"
              >
                <div className="w-full h-[182px] bg-black rounded-md mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={item.images[0]?.url || "https://picsum.photos/400"}
                    alt={item.name}
                  />
                </div>
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {truncatedDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Jump Back In Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Jump back in</h2>
          <span
            onClick={() => {
              setAll2(8);
              success();
            }}
            className="cursor-pointer mr-16 hover:underline"
          >
            Show All
          </span>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          {jumpData?.slice(0, all2).map((item, index) => {
            const maxLength = 20;
            const truncatedDescription =
              item.description.length > maxLength
                ? item.description.slice(0, maxLength) + "... and more"
                : item.description;
            return (
              <div
                onClick={() => handlePlaylistClick(item.id)}
                key={index}
                className="cursor-pointer bg-[#161838] w-[200px] h-[324px] p-4 rounded-lg hover:bg-[#1c1f4a] transition-colors"
              >
                <div className="w-full h-[182px] bg-black rounded-md mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={item.images[0]?.url || "https://picsum.photos/400"}
                    alt={item.name}
                  />
                </div>
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {truncatedDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">UNIQUELY YOURS:</h2>
          <span
            onClick={() => {
              setAll3(8);
              success();
            }}
            className="cursor-pointer mr-16 hover:underline"
          >
            Show All
          </span>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          {yoursData?.slice(0, all3).map((item, index) => {
            const maxLength = 20;
            const truncatedDescription =
              item.description.length > maxLength
                ? item.description.slice(0, maxLength) + "... and more"
                : item.description;
            return (
              <div
                onClick={() => navigate(`/playlist/${item.id}`)}
                key={index}
                className="cursor-pointer bg-[#161838] w-[200px] h-[324px] p-4 rounded-lg hover:bg-[#1c1f4a] transition-colors"
              >
                <div className="w-full h-[182px] bg-black rounded-md mb-4">
                  <img
                    src={item.images[0]?.url || "https://picsum.photos/400"}
                    alt=""
                  />
                </div>
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-sm text-gray-400">
                  {truncatedDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
