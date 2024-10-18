import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-900 to-black">
      <div className="relative w-24 h-24">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full border-4 border-green-500 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1.5s",
            }}
          ></div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5 16.5C13.5 14.5 9.5 14 6.5 15C6.2 15.1 5.90001 14.9 5.80001 14.6C5.70001 14.3 5.90001 14 6.20001 13.9C9.50001 12.8 13.9 13.3 17.2 15.5C17.5 15.7 17.6 16.1 17.4 16.4C17.2 16.6 16.8 16.7 16.5 16.5ZM17.7 13.8C14.2 11.5 9.30001 11 6.00001 12.3C5.60001 12.4 5.20001 12.2 5.10001 11.8C5.00001 11.4 5.20001 11 5.60001 10.9C9.40001 9.4 14.7 9.9 18.8 12.6C19.1 12.8 19.2 13.3 19 13.6C18.8 13.9 18.3 14 17.9 13.8H17.7ZM19.1 10.8C15 8.2 9.20001 7.7 5.40001 8.9C4.90001 9 4.40001 8.8 4.30001 8.3C4.20001 7.8 4.40001 7.3 4.90001 7.2C9.20001 5.9 15.5 6.4 20.2 9.4C20.6 9.6 20.8 10.2 20.6 10.6C20.3 11.1 19.7 11.2 19.3 11L19.1 10.8Z"
              fill="#1DB954"
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-4 text-green-500 text-xl font-bold animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
